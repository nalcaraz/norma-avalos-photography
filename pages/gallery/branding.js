import React from 'react'
import Layout from '../../containers/layout'
import Link from 'next/link'
import GalleryCarousel from '../../components/galleryCarousel'
import BackToGallery from '../../components/backToGallery'
import GalleryContent from '../../components/galleryContent'
const images = [
    {
        src: '/logo.png',
        alt: 'logo1',
    },
    {
        src: '/logo.png',
        alt: 'logo2',
    },
    {
        src: '/logo.png',
        alt: 'logo3',
    },
    {
        src: '/logo.png',
        alt: 'logo4',
    },
]

const BrandingGallery = () => {
    return (
        <GalleryContent
            title="Branding Gallery"
            images={images}
        ></GalleryContent>
    )
}

export default BrandingGallery
