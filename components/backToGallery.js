import React from 'react'
import Link from 'next/link'
const BackToGallery = () => {
    return (
        <Link href="/gallery">
            <a className="link">Back To Gallery</a>
        </Link>
    )
}

export default BackToGallery
