// const isTrusy = value=>value

function classes (...names:(string|undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default classes