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

