import React, { Fragment, ReactElement, ReactFragment, ReactNode } from 'react'
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
    // console.log(props,'props')
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
                    {/* <button>ok</button>
                <button>cancle</button> */}
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

const alert = (content: string) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div) //不挂载div了
        div.remove()
    }
    const component = <Dialog
        visible
        onClose={onClose}
        buttons={[<button onClick={onClose}>ok</button>]}
    >{content}</Dialog>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div) //不挂载div了
        div.remove()
        yes && yes()
    }
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div) //不挂载div了
        div.remove()
        no && no()
    }
    const component = (<Dialog visible onClose={onNo} buttons={[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>]}>
        {content}
    </Dialog>);
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
}

const modal = (content: ReactNode | ReactFragment) => { //ReactFrament是多元素
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div) //不挂载div了
        div.remove()
    }
    const component = (
        <Dialog
            visible
            onClose={onClose}
        >
            {content}
        </Dialog>
    )
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
    return onClose
}

export { alert, confirm, modal }

export default Dialog

