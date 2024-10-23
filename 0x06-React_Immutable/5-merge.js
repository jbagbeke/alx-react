import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
    return List(Map(page1).concat(page2))
}

export function mergeElements(page1, page2) {
    if (page1 === page2)
        return page2
    return List(Map(page1).merge(page2))
}
