import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
    const p1 = List(page1)
    const p2 = List(page2)
    return p1.concat(p2)
}

export function mergeElements(page1, page2) {
    if (page1 === page2)
        return List(page2)
    return List(Map(page1).merge(page2))
}
