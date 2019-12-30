import React, { useState } from 'react'
import Dialog from './dialog'


export default function () {
    const [x,setX] = useState(false)
    const [y,setY] = useState(false)
    return (
        <div>
        <div>
            <div>example 1</div>
            <button onClick={()=>{setX(!x)}}>click</button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={()=>{setX(false)}}>1</button>,
                    <button onClick={()=>{setX(false)}}>2</button>
                ]
            } onClose={()=>{setX(false)}}>
                <div>hi</div>
            </Dialog>
        </div>
        <div>
            <div>example 2</div>
            <button onClick={()=>{setY(!y)}}>click</button>
            <Dialog visible={y} buttons={
                [
                    <button onClick={()=>{setY(false)}}>1</button>,
                    <button onClick={()=>{setY(false)}}>2</button>
                ]
            } onClose={()=>{setY(false)}} closeOnclickMask>
                <div>hi</div>
            </Dialog>
        </div>
        </div>
    )
}