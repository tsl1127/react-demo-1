import React from 'react'
import IconExample from './icon.example'
import Demo from '../demo'
const x = require('!!raw-loader!./icon.example.tsx')//2个感叹号开启自定义加载


const IconDemo = () => {
    return (
        <Demo code={x.default}>
            <IconExample></IconExample>
        </Demo>
    )
}

export default IconDemo