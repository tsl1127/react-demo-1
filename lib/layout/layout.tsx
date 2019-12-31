import React, { ReactElement } from 'react'
import './layout.scss'
import { scopedClassMaker } from '../classes'
import Aside from './aside'
const sc = scopedClassMaker('lunzi-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    // style: CSSProperties,
    // className: string
    children: ReactElement | Array<ReactElement>//必须在layout里使用元素
}

const Layout: React.FunctionComponent<Props> = (props) => {
    // console.log(props.children)
    const { className, ...rest } = props
    let hasAside = false
    if ((props.children as Array<ReactElement>).length) {
        (props.children as Array<ReactElement>).map((node) => {
            if(node.type === Aside) {
                hasAside = true
            }
        })
    }  //如果不写as（是断言的意思，假设children是数组，为了让代码执行下去），则提示children是为element，不会有map方法，.length会报红


    return (
        <div className={sc('', { extra: [className,hasAside && 'hasAside'].join(' ') })} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout