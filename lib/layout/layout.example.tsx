import React from 'react'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'

export default function () {
    return (
        <div>
            <h1>layout</h1>
            <Layout style={{height:500}} className="hi">
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}