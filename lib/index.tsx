import React from 'react';
import ReactDOM from 'react-dom'
// import Button from './button'
import Icon from './icon'

// console.log('hi')
// ReactDOM.render(<Button></Button>,document.body)
const fn = ()=>{
    console.log('fn')
}

ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}></Icon>
    {/* <Icon name="pay"></Icon> */}
</div>,document.querySelector('#root'))
// const a = 1
// export {Button, a}