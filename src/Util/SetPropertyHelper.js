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
