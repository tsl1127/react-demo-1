import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button.example'
import DialogExample from './lib/dialog/dialog.example'
import LayoutExample from './lib/layout/layout.example'
import { Layout, Header, Aside, Content, Footer } from './lib/layout/layout'
import './example.scss'
// import * as logo from './logo.png'
const logo = require('./logo.png')
// console.log(logo,'logo')

ReactDOM.render((
    <Router>
        <Layout className='site-page'>
            <Header className='site-header'>
                <div className="site-logo">
                    <img src={logo.default} alt='' width="48" height="48"></img>
                    <span >lunzi</span>
            </div>
            </Header>
            <Layout>
                <Aside className='site-aside'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/dialog">Dialog</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-main'>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </Content>
            </Layout>
            <Footer className='site-footer'>
                &copy; tsl
                </Footer>
        </Layout>
    </Router>
), document.querySelector('#root'))