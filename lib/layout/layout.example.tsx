import React from 'react'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Aside from './aside'

export default function () {
    return (
        <div>
            <div>
                <h1>第1个例子</h1>
                <Layout style={{height:500}} className="hi">
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第2个例子</h1>
                <Layout style={{height:500}} className="hi">
                    <Header>header</Header>
                    <Layout>
                        <Aside></Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第3个例子</h1>
                <Layout style={{height:500}} className="hi">
                    <Header>header</Header>
                    <Layout>
                        <Content></Content>
                        <Aside></Aside>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第4个例子</h1>
                <Layout style={{height:500}} className="hi">
                    <Aside></Aside>
                    <Layout>
                        <Header>header</Header>
                        <Content></Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}