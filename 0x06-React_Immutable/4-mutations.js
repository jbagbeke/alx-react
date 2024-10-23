import { Map } from "immutable";

export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
})

export const map2 = map.setIn([2], 'Benjamin').setIn([4], 'Oliver')


map.forEach((v, k) => console.log(k, ' ----- ', v))
console.log()
console.log()
map2.forEach((v, k) => console.log(k, ' ----- ', v))
