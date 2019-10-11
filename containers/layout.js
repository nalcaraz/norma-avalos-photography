import React, { Fragment } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
const Layout = ({ children, title }) => {
    return (
        <Fragment>
            <Head title={title}></Head>           
            <Nav></Nav>
            <main class="container"> {children}</main>
            <Footer></Footer>
        </Fragment>
    )
}
export default Layout;
