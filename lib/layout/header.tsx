import React from 'react'
import { scopedClassMaker } from '../classes'
const sc = scopedClassMaker('lunzi-layout')

const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('header')}>header</div>
    )
}

export default Header