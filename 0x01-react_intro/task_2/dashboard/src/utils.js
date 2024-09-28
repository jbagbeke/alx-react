
export function getFullYear() {
    const newDate = new Date();
    return newDate.getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex)
        return 'Holberton School'
    return 'Holberton School main dashboard'
}