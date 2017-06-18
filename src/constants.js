import 'whatwg-fetch'
import { getUid } from './helpers'

const getRandomTigerGif = () => {
  return fetch('https://api.giphy.com/v1/gifs/search?q=tiger&api_key=dc6zaTOxFJmzC')
  .then(res => res.json())
  .then(res => res.data)
  .then(images => {
    const selected = parseInt(Math.random() * images.length, 10)
    console.log(images[selected])
    return `*TIKRU* ${images[selected].images.original.url}`
  })
}

export const MESSAGES = [
  {
    id: getUid(),
    title: 'Kahvia',
    getContent: () => Promise.resolve('*KAHVIAAA!*'),
  }, {
    id: getUid(),
    title: 'Tillintallin',
    getContent: () => Promise.resolve(':tillintallin:'),
  }, {
    id: getUid(),
    title: 'Vittu Luffis',
    getContent: () => Promise.resolve('*Vittu Luffis* :tillintallin::busybee:'),
  }, {
    id: getUid(),
    title: 'Nälkä',
    getContent: () => Promise.resolve('*NÄLKÄÄÄÄÄÄ*'),
  }, {
    id: getUid(),
    title: 'Rahkaa',
    getContent: () => Promise.resolve('*RAHKAAAAA*'),
  }, {
    id: getUid(),
    title: 'Tunti viel',
    getContent: () => Promise.resolve('*Tunti vielä* :tillintallin:'),
  }, {
    id: getUid(),
    title: 'Tikru Gif',
    getContent: getRandomTigerGif,
  }, {
    id: getUid(),
    title: 'Millon saa lähtee?',
    getContent: () => Promise.resolve('Millon saa lähtee? :tillintallin::tillintallin::tillintallin:'),
  }, {
    id: getUid(),
    title: 'Pärisee',
    getContent: () => Promise.resolve(':busybee:'),
  }, {
    id: getUid(),
    title: 'Karttii',
    getContent: () => Promise.resolve('Kartiiii :mk-star:'),
  }, {
    id: getUid(),
    title: 'Luffis dublin',
    getContent: () => Promise.resolve(':busybee_tippuu:\n:bathtub:'),
  }, {
    id: getUid(),
    title: 'Custom',
    getContent: () => Promise.resolve(prompt('Terkut Kyykkikselle:')),
  },
]
