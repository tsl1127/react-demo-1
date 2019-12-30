import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './dialog'
// import Dialog from './dialog'

export default function () {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)

    const openModal = () =>{
        //把modal中return的函数定义下
        const closeReturn = modal(<h1>modal节点 
            <button onClick={()=>{closeReturn()}}>close</button>
            </h1>)
    }

    return (
        <div>
            <div>
                <div>example 1</div>
                <button onClick={() => { setX(!x) }}>click</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => { setX(false) }}>1</button>,
                        <button onClick={() => { setX(false) }}>2</button>
                    ]
                } onClose={() => { setX(false) }}>
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <div>example 2</div>
                <button onClick={() => { setY(!y) }}>click</button>
                <Dialog visible={y} buttons={
                    [
                        <button onClick={() => { setY(false) }}>1</button>,
                        <button onClick={() => { setY(false) }}>2</button>
                    ]
                } onClose={() => { setY(false) }} closeOnclickMask>
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <div>example 3</div>
                <button onClick={() => { alert('3') }}>alert</button>
                <button onClick={() => confirm('qr', () => { console.log('你点击了yes') }, () => { console.log('你点击了no') })}>confirm</button>
            </div>
            <div>
                <div>example 4</div>
                <button onClick={openModal}>modal</button>
            </div>
        </div>
    )
}