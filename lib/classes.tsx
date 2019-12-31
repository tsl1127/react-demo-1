
interface y {
    extra: string | undefined
}

function scopedClassMaker(prefix: string) {
    return function x(name?: string, options?: y) {
        const result = [prefix, name].filter(Boolean).join('-')
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ')
        } else {
            return result
        }
    }
}

export { scopedClassMaker }