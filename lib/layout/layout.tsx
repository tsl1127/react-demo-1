import React from 'react'
import './layout.scss'
import { scopedClassMaker } from '../classes'
const sc = scopedClassMaker('lunzi-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    // style: CSSProperties,
    // className: string
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
    <div className={[sc(),className].join(' ')} {...rest}>
        {props.children}
        </div>
    )
}

export default Layout