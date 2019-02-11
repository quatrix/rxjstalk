import * as moment from 'moment'

interface Cat {
  name: string
  age: number
  image: string
}

interface Cats {
  [color: string]: Cat
}

const _cats: Cats = {
  black: {
    name: 'silvester',
    age: 5,
    image: __dirname + '/static/cats/black.jpg',
  },
  orange: {
    name: 'trump',
    age: 7,
    image: __dirname + '/static/cats/orange.jpg',
  },
  gray: {
    name: 'gandolf the gray',
    age: 3,
    image: __dirname + '/static/cats/gray.jpg',
  },
}

export const printer = (prefix: string) => (n: number) =>
  console.log(`[${prefix}] ${moment().format('HH:mm:ss.S')} :: ${n}`)

export const getCat = (color: string) => {
  return new Promise((resolve, reject) => {
    if (process.env.DEBUG) {
      console.log(`getting cat ${color}`)
    }

    const delay = process.env.DELAY ? Number(process.env.DELAY) : 0

    setTimeout(() => {
      if (color in _cats) {
        resolve(_cats[color])
      } else {
        reject(`omg cannot find cat with color ${color}`)
      }
    }, delay)
  })
}
