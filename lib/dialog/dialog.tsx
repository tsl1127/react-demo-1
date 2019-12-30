import React, { Fragment } from 'react'
import './dialog.scss'
import { Icon } from '../index'


interface Props {
    visible: boolean,
}

function x (name?:string) {
    return ['lunzi-dialog',name].filter(Boolean).join('-')
}

const Dialog: React.FunctionComponent<Props> = (props) => {

    return (
        props.visible ?
            <Fragment>
                <div className={x('mask')}>

                </div>
                <div className={x()}>
                    <div className={x('close')}>
                        <Icon name="close"></Icon>
                    </div>
                    <header className={x('header')}>
                        提示
                    </header>
                    <main className={x('main')}>
                        <div>{props.children}</div>
                    </main>
                    <footer className={x('footer')}>
                        <button>ok</button>
                        <button>cancle</button>
                    </footer>
                </div>
            </Fragment>
            : null
    )
}

export default Dialog

