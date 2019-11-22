import React, { Fragment } from 'react'
import Link from 'next/link'


const links = [
    { href: '/about', label: 'Meet Norma' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/praises', label: 'Praises' },
    { href: '/faq', label: 'FAQs' },
    { href: 'https://normaavalosphotography.client-gallery.com', label: 'Clients' },
    { href: '/contact', label: 'Contact' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <Fragment>
        <div
            className="position-absolute w-100 d-flex justify-content-between"
            style={{ top: '-50px' }}
        >
            <img alt="watercolor" src="/watercolor_002_xs.png" height="150px"></img>
            <img  alt="watercolor" 
                src="/watercolor_002_xs.png"
                height="150px"
                style={{ transform: 'scaleX(-1)' }}
            ></img>
        </div>
        <div className="d-flex justify-content-center">
            <img alt="logo" src="/logo_xs.png" height="225px"></img>
        </div>
        <nav className="navbar navbar-expand-md justify-content-between navbar-light bg-light  sticky-top">
          
            <button
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-center w-100  sticky-top">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link primary-font">Home</a>
                        </Link>
                    </li>
                    {links.map(({ key, href, label }) => (
                        <li className="nav-item" key={key}>
                            <a className="nav-link primary-font" href={href}>
                                {label}
                            </a>
                        </li>
                    ))}
                    <style jsx>{`
                        .nav-link {
                           
                            color: #bf9000 !important;
                            font-size: 1.75rem;
                        }
                        .nav-link:hover {
                            font-weight: bold;
                        }
                    `}</style>
                </ul>
            </div>
        </nav>
    </Fragment>
)

export default Nav
