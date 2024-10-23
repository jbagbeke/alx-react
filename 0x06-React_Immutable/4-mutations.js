import { Map } from "immutable";

export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
})

export const map2 = map.withMutations((mp) => mp.set(2, 'Benjamin').set(4, 'Oliver'))

map2.forEach((v, k) => console.log(k, ' ------ ', v))

console.log(map2.get('2'))
