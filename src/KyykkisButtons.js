import './KyykkisButtons.css'

import React, { Component } from 'react'
import classNames from 'classnames'
import { MESSAGES } from './constants'
import { playBoom, prefixStyle } from './helpers'

export default class extends Component {
  constructor() {
    super()
    this.state = { explosions: [], explosionIds: [] }
    this.doms = {}
  }

  onClick(message) {
    this.explode(message)
  }

  explode(message) {
    const targetDom = this.doms[message.id]
    this.setState({
      explosionIds: [...this.state.explosionIds, message.id],
      explosions: [...this.state.explosions, {
        ...message,
        style: {
          top: targetDom.offsetTop,
          left: targetDom.offsetLeft,
          width: targetDom.offsetWidth,
          height: targetDom.offsetHeight,
        }
      }]
    }, () => {
      setTimeout(() => {
        this.setState({
          explosionIds: this.state.explosions.filter(id => id !== message.id),
          explosions: this.state.explosions.filter(x => x.id !== message.id),
        })
      }, 800)
      playBoom()
    })
  }

  render() {
    return (
      <div className="KyykkisButtons">
        { MESSAGES.map((message, i) => (
          <KyykkisButton
            reference={dom => this.doms[message.id] = dom}
            message={message}
            onClick={e => {
              e.preventDefault()
              if (this.state.explosionIds.indexOf(message.id) !== -1) return false
              this.onClick(message)
            }}
            tabIndex={i}
            exploding={this.state.explosionIds.indexOf(message.id) !== -1}
            key={message.id}
          />
        ))}
        <div className="KyykkisButtons__explosions">
          { this.state.explosions.map(explosion => (
            <div key={explosion.id} className="KyykkisButtons__explosion" style={explosion.style}>
              { getExplosionPolygons().map((polygon, i) => (
                <KyykkisButton
                  key={`${explosion.id}${i}`}
                  message={explosion}
                  style={prefixStyle({
                    clipPath: `polygon(${polygon})`
                  })}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const KyykkisButton = ({ message, onClick, tabIndex, reference, style, exploding }) => (
  <div
    className={classNames('KyykkisButtons__button', {
      'KyykkisButtons__button--exploding': exploding
    })}
    onClick={onClick}
    children={<span>{message.title}</span>}
    tabIndex={tabIndex}
    ref={reference}
    style={style}
  />
)

const getExplosionPolygons = (gridSize = 3) => {
  const shards = []
  const chardSize = 100 / 3

  for(let y = 0; y < gridSize; y++) {
    for(let x = 0; x < gridSize; x++) {
  	  let nx = x / gridSize * 100
  	  let ny = y / gridSize * 100
      let nw = chardSize
      let nh = chardSize

      shards.push([
        [nx, ny],
        [nx + nw, ny],
        [nx + nw, ny + nh],
        [nx, ny + nh],
	  ])
    }
  }
  return shards.map(polygon => polygon.map(point => `${point[0]}% ${point[1]}%`).join(', '))
}
