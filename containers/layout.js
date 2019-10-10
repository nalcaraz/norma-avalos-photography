import React, { Fragment } from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
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
export default Layout
