import React, { ReactElement } from 'react'
import './layout.scss'
import { scopedClassMaker } from '../helpers/classes'
import Aside from './aside'
const sc = scopedClassMaker('lunzi-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    // style: CSSProperties,
    // className: string
    children: ReactElement | Array<ReactElement>//必须在layout里使用元素
}
    //'length' in children只会返回true和false 如果用children.length则有可能为0
const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props
    const children = props.children as Array<ReactElement>
    const hasAside = 'length' in children && children.reduce((result, node) => {
        return result || (node.type === Aside)
    }, false)

    //如果不写as（是断言的意思，假设children是数组，为了让代码执行下去），则提示children是为element，不会有map方法，.length会报红


    return (
        <div className={sc({'':true,'hasAside':hasAside}, { extra: className })} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout