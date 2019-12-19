import React from 'react'
// import wechat from './icons/wechat.svg'
// console.log(wechat)

// import  './icons/wechat.svg'
// import './icons/pay.svg'

import './importIcons'
import './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    // onClick: React.MouseEventHandler<SVGElement>  //svg元素的鼠标处理函数
    // onClick: (e:React.MouseEvent)=>void
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='lunzi-icon' 
        // onClick={props.onClick}
        // onMouseLeave={props.onMouseLeave}
        // onMouseEnter={props.onMouseEnter}
        {...props}
        >
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon