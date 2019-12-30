import React, { Fragment, ReactElement, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import { Icon } from '../index'
import { scopedClassMaker } from '../classes'


interface Props {
    visible: boolean,
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnclickMask?: boolean; //可选
}


const scopedClass = scopedClassMaker('lunzi-dialog')
const x = scopedClass


const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }

    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnclickMask) {
            props.onClose(e)
        }
    }

    const m = props.visible ?
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
                {props.buttons && props.buttons.length > 0 && <footer className={x('footer')}>
                    {props.buttons && props.buttons.map((button, index) => {
                        // React.cloneElement(button, { key: `button_${index}` })
                        return <Fragment key={`button_${index}`}>{button}</Fragment>

                    })}
                </footer>}

            </div>
        </Fragment>
        : null

    return (
        ReactDOM.createPortal(m, document.body) //解决样式的z-index问题,这个叫做传送门
    )
}

Dialog.defaultProps = {
    closeOnclickMask: false
}

const modal = (content: string | ReactNode, buttons?: Array<ReactElement>,afterClose?:()=>void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div) //不挂载div了
        div.remove()
    }
    const component = <Dialog
        visible
        onClose={()=>{
            close()
            afterClose && afterClose()
        }}
        buttons={buttons}
    >{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return close
}

const alert = (content: string) => {
    const close = modal(content, [<button onClick={() => { close() }}>ok</button>])
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close()
        yes && yes()
    }
    const onNo = () => {
        close()
        no && no()
    }
    const close = modal(content, [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>],no)
}


export { alert, confirm, modal }

export default Dialog

