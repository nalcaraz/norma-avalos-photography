import React, { Fragment } from 'react'
import Link from 'next/link'
const BackToGallery = () => {
    return (
        <Fragment>
            <Link href="/gallery">
                <a className="back link">Back To Gallery</a>
            </Link>
            <style jsx>{`
                .back.link {
                    font-size: 1.25rem;
                }
            `}</style>
        </Fragment>
    )
}

export default BackToGallery
