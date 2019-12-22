import React from 'react'
// import wechat from './icons/wechat.svg'
// console.log(wechat)

// import  './icons/wechat.svg'
// import './icons/pay.svg'

import './importIcons'
import './icon.scss'
import classes from './helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    // onClick: React.MouseEventHandler<SVGElement>  //svg元素的鼠标处理函数
    // onClick: (e:React.MouseEvent)=>void
}

const Icon:React.FunctionComponent<IconProps> = ({className,name, ...restProps}) => {
    // const {className,name, ...restProps } = props
    return (
        // <svg className={`lunzi-icon ${className? className:''}`} 
        <svg className={classes('lunzi-icon',className)} 
        // onClick={props.onClick}
        // onMouseLeave={props.onMouseLeave}
        // onMouseEnter={props.onMouseEnter}
        {...restProps}
        >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}

export default Icon