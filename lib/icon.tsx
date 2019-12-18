import React from 'react'
// import wechat from './icons/wechat.svg'
// console.log(wechat)

import  './icons/wechat.svg'
import './icons/pay.svg'

interface IconProps {
    name: string;
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
    <span>
        <svg>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
        </span>
    )
}

export default Icon