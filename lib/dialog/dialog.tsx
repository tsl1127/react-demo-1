import React, { Fragment, ReactElement } from 'react'
import './dialog.scss'
import { Icon } from '../index'
import { scopedClassMaker } from '../classes'


interface Props {
    visible: boolean,
    buttons: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnclickMask?:boolean; //可选
}


const scopedClass = scopedClassMaker('lunzi-dialog')
const x = scopedClass


const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }

    const onClickMask: React.MouseEventHandler = (e) =>{
        if(props.closeOnclickMask) {
            props.onClose(e)
        }
    }

    return (
        props.visible ?
            <Fragment>
                <div className={x('mask')} onClick={onClickMask}>

                </div>
                <div className={x()}>
                    <div className={x('close')} onClick={onClickClose}>
                        <Icon name="close"></Icon>
                    </div>
                    <header className={x('header')}>
                        提示
                    </header>
                    <main className={x('main')}>
                        <div>{props.children}</div>
                    </main>
                    <footer className={x('footer')}>
                        {/* <button>ok</button>
                        <button>cancle</button> */}
                        {props.buttons.map((button, index) => {
                            React.cloneElement(button, { key: index })
                        })}
                    </footer>
                </div>
            </Fragment>
            : null
    )
}

Dialog.defaultProps = {
    closeOnclickMask: false
}

export default Dialog

