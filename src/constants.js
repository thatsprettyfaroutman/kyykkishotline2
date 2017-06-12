import { getUid } from './helpers'

export const MESSAGES = [
  {
    id: getUid(),
    title: 'Seuraa',
    getContent: () => Promise.resolve('*SEURAAAA!*'),
  }, {
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
    getContent: () => Promise.resolve('*Vittu Luffis* :tillintallin::bee:'),
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
    getContent: () => Promise.resolve(':bee:'),
  }, {
    id: getUid(),
    title: 'Karttii',
    getContent: () => Promise.resolve('Kartiiii :mk-star:'),
  }, {
    id: getUid(),
    title: 'Luffis dublin',
    getContent: () => Promise.resolve(':busybee_tippuu:\n:bathtub:'),
  },
]



const getRandomTigerGif = () => {
  return fetch('http://api.giphy.com/v1/gifs/search?q=tiger&api_key=dc6zaTOxFJmzC')
  .then(res => res.json())
  .then(res => res.data)
  .then(images => {
    const selected = parseInt(Math.random() * images.length, 10)
    return `*TIKRU* ${images[selected].url}`
  })
}
