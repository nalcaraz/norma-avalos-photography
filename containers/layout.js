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
                    font-family: 'Dawning of a New Day', cursive;
                    color: #8bc34a;
                    font-size: 1.75rem;
                }
                a.link:hover {
                    font-weight: bold;
                    text-decoration: none;
                    text-decoration-line: none;
                }
                .dawn-new-day {
                    font-family: 'Dawning of a New Day', cursive;
                }
                .font-cinzel {
                    font-family: 'Cinzel', serif;
                }
            `}</style>
        </Fragment>
    )
}
export default Layout
