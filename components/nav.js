import React, {Fragment} from 'react'
import Link from 'next/link'

const links = [
    { href: '/about', label: 'Meet Norma' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/praises', label: 'Praises' },
    { href: '/faq', label: 'FAQs' },
    { href: '/clients', label: 'Clients' },
    { href: '/contact', label: 'Contact' },
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
})

const Nav = () => (
    <Fragment>
        <div
            className="position-fixed w-100 d-flex justify-content-between"
            style={{ top: '-50px' }}
        >
            <img src="/watercolor_002.png" height="150px"></img>
            <img
                src="/watercolor_002.png"
                height="150px"
                style={{ transform: 'scaleX(-1)' }}
            ></img>
        </div>
        <div className="d-flex justify-content-center">
            <img src="/logo.png" height="225px"></img>
        </div>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
            </li>
            {links.map(({ key, href, label }) => (
                <li className="nav-item" key={key}>
                    <a className="nav-link" href={href}>
                        {label}
                    </a>
                </li>
            ))}
            <style jsx>{`
                .nav-link {
                    font-family: 'Dawning of a New Day', cursive;
                    color: #8bc34a;
                    font-size: 1.75rem;
                }
                .nav-link:hover {
                    font-weight: bold;
                }
            `}</style>
        </ul>
    </Fragment>
)

export default Nav
