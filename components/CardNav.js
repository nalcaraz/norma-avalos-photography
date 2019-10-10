import React from 'react'
import Link from 'next/link'

const CardNav = ({ path, label, img }) => {
    return (
        <div className="card" >
            <img
                className="card-img-top img-fluid"
                src={img}
                alt="Card image cap"
            />
            <div className="card-body">
                <Link href={path}>
                    <a className="stretched-link">{label}</a>
                </Link>
            </div>
            <style jsx>{`
            .stretched-link{
                font-family: 'Dawning of a New Day', cursive;
                color: #8bc34a;
                font-size: 1.75rem;
            }`}</style>
        </div>

    )
}
export default CardNav;
