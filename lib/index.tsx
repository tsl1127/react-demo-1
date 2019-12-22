import React from 'react';
import ReactDOM from 'react-dom'
// import Button from './button'
import Icon from './icon/icon'

// console.log('hi')
// ReactDOM.render(<Button></Button>,document.body)
// const fn = (e:React.MouseEvent<SVGElement|SVGUseElement>)=>{
//     console.log('fn',e)
//     console.log(e.target)
//     console.log((e.target as SVGUseElement).href)  //断言

// }

// const fn = (e:React.MouseEvent) => {
//     console.log((e.target as HTMLDivElement).style)
// }

const fn:React.MouseEventHandler = (e) =>{
    console.log(e.target)
}

ReactDOM.render(<div>
    <Icon name="wechat" 
        onClick={fn}
        // className='qqq'
        onMouseEnter={()=>{console.log('enter')}}
        onMouseLeave={()=>{console.log('leave')}}
        onTouchStart={()=>{console.log('onTouchStart')}}
    ></Icon>
    {/* <Icon name="pay"></Icon> */}
</div>,document.querySelector('#root'))
// const a = 1
// export {Button, a}