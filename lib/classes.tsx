
// interface y {
//     extra: string | undefined
// }

// interface x {
//     [K: string]: boolean  //key为string，value为布尔的任意对象
// }

// function scopedClassMaker(prefix: string) {
//     return function (name?: string | x, options?: y) {
//         //name= {hasAside: true, active: false,x:ture,y:false}
//         let name2
//         let result
//         if (typeof name === 'string' || name === undefined) {
//             name2 = name
//             result = [prefix, name2].filter(Boolean).join('-')
//         } else {
//             name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
//             //['hasAside','x']
//             result = name2.map(m => {
//                 return [prefix, m].filter(Boolean).join('-')
//             }).join(' ')
//             //['lunzi-layout-hasAside','lunzi-layout-x']
//             // '.lunzi-layout-hasAside .lunzi-layout-x'

//         }
//         if (options && options.extra) {
//             return [result, options.extra].filter(Boolean).join(' ')
//         } else {
//             return result
//         }
//     }
// }

// export { scopedClassMaker }