import { fromJS } from 'immutable';


export default function getImmutableObject(object) {
    return fromJS(object)
}



const exp = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}

console.log(exp)
console.log()
console.log()
console.log()
console.log(getImmutableObject(exp))

