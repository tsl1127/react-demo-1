// import React from 'react'  这种写法在jest里会报错，没有默认导出；是由于tsconfig.json里的allowSyntheticDefaultImports为true导致的,让其为false，让esModuleInterop为true，这里这种写法就可以用
// import * as React from 'react'
import React from 'react'
// import ReactDOM from 'react-dom'

function Button () {
    return (
        <div>我是Button</div>
    )
}

export default Button