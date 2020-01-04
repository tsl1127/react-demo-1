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

const scopedClassMaker = (prefix: string) =>
    (name: string | x, options?: y) =>
        Object
            .entries(name instanceof Object ? name : { [name]: name })
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => {
                return [prefix, name].filter(Boolean).join('-')
            })
            .concat(options && options.extra || [])
            .join(' ')

export { scopedClassMaker }