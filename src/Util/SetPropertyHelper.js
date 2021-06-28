export function setIcon(e) {
    return {
        "id": e.id,
        "fileName": e.fileName,
        "alt": e.id,
        "class": "large_icon"
    }
}

export function setTitle(e) {
    return {
        "content": e.content,
        "background": e.background
    }
}

export function trimDoubleSlash(s) {
    if (typeof s === 'string' || s instanceof String)
        return s.replace(/\/{2,}/g, '/');
    return "";
}

export function getLowestIndex(arr) {
    let lowest = 99999999;
    let index = 0;
    arr.forEach((e, i) => {
        if (e < lowest) {
            lowest = e;
            index = i;
        }
    })
    return index;
}