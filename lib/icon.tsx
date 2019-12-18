import React from 'react'
// import wechat from './icons/wechat.svg'
// console.log(wechat)

import  './icons/wechat.svg'

interface IconProps {
    name: string;
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
    <span><svg>
        <use xlinkHref="#wechat"></use>
        </svg></span>
    )
}

export default Icon