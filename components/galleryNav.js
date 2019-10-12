import React from 'react'
import Link from 'next/link'

const GalleryNav = ({ label, path, img }) => {
    return (
        <div className="card gallery-nav w-100 m-md-4">
            <img className="card-img-top gallery-nav-img" src={img} alt="Card image cap"></img>
            <div className="card-body text-center">
                <Link href={path}>
                    <a className="link stretched-link">{label}</a>
                </Link>
            </div>
            <style jsx>{`
                .gallery-nav{
                    height: 25rem;
                }
                .gallery-nav img{
                    width: 100%;
                    height: 20rem;
                    object-fit:cover;
                }
                
            `}</style>
        </div>
    )
}

export default GalleryNav
