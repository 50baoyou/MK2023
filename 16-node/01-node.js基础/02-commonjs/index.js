// import { sum } from './test.js'

// const res = sum(1, 3)

// console.log(res)

import('./test.js')
    .then((mod) => {
        const res = mod.sum(1, 3)
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

try {
    const mod = await import('./test.js')
    const res = mod.sum(4, 4)
    console.log(res)
} catch (error) {
    console.log(error)
}
