import React from 'react'
// import wechat from './icons/wechat.svg'
// console.log(wechat)

// import  './icons/wechat.svg'
// import './icons/pay.svg'

import './importIcons'
import './icon.scss'

interface IconProps {
    name: string;
    onClick: React.MouseEventHandler<SVGElement>  //svg元素的鼠标处理函数
    // onClick: ()=>void
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='lunzi-icon' onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon