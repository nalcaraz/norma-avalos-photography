import React, { Fragment } from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
const Layout = ({ children, title }) => {
    return (
        <Fragment>
            <Head
                title={
                    `${title} - Norma Avalos Photography` ||
                    'Norma Avalos Photography'
                }
            ></Head>
            <Nav></Nav>
            <main className="container pt-3 pb-5"> {children}</main>
            <Footer></Footer>
            <style jsx global>{`
                a.link {
                    font-family:'Cormorant Infant', serif;
                    color:#bf9000;
                    font-size: 1.75rem;
                }
                a.link:hover {
                    font-weight: bold;
                    text-decoration: none;
                    text-decoration-line: none;
                }
                .primary-font {
                    font-family: 'Cormorant Infant', serif;
                }
                .secondary-font {
                    font-family: 'Cinzel', serif;
                }
                .small{
                    font-size: 1.25rem !important;
                }
            `}</style>
        </Fragment>
    )
}
export default Layout
