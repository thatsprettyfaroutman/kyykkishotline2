import 'whatwg-fetch'
import shortid from 'shortid'
import BOOM_1 from './boom-1.m4a'
import BOOM_2 from './boom-2.m4a'
import BOOM_3 from './boom-3.m4a'
import BOOM_4 from './boom-4.m4a'

shortid.characters('☄★☔☕☘☝☢☣☾♔♕♖♗♘♙♚♛♜♝♞♟♡♢♤♧♨♬♿⚒⚓⚔⚕⚖⚗⚙⚛⚜⚡⚪⚫⚰⚱⚽⚾⛄⛅⛈⛎⛑⛓⛔⛩⛪⛰⛱⛲⛳⛴⛵⛷⛸⛹⛺⛽'.substr(0, 64));

// export const getUid = ((i=0) => () => i++)()
export const getUid = () => shortid.generate()


export const capitalizeFirst = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '' // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase()
  })
}

export const prefixStyle = (style={}) => {
  const PREFIXES = ['Webkit ', 'Moz ', 'Ms ', 'O ']
  return Object.keys(style).reduce((prefixed, property) => {
    PREFIXES.forEach(prefix => prefixed[capitalizeFirst(camelize(`${prefix}${property}`))] = prefixed[property])
    return prefixed
  }, {...style})
}

export const playBoom = () => {
  const SOUNDS = [BOOM_1, BOOM_2, BOOM_3, BOOM_4]
  const lotto = parseInt(Math.random() * SOUNDS.length, 10)
  const audio = new Audio(SOUNDS[lotto])
  audio.play()
}
