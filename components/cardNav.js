import React from 'react'
import Link from 'next/link'

const CardNav = ({ path, label, img }) => {
    return (
        <div className="card" >
            <img
                className="card-img-top img-fluid"
                src={img}
                alt={img}
            />
            <div className="card-body text-center">
                <Link href={path}>
                    <a className="link  stretched-link">{label}</a>
                </Link>
            </div>
          
        </div>

    )
}
export default CardNav;
