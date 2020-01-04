// const isTrusy = value=>value

function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default classes


interface y {
    extra: string | undefined
}

interface x {
    [K: string]: boolean  //key为string，value为布尔的任意对象
}

function scopedClassMaker(prefix: string) {
    return function (name: string | x, options?: y) {
        const namesObject = (typeof name === 'string' || name === undefined) ? { [name]: name } : name
        const result = Object
            .entries(namesObject)
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => {
                return [prefix, name].filter(Boolean).join('-')
            })
            .join(' ')

        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ')
        } else {
            return result
        }
    }
}

export { scopedClassMaker }