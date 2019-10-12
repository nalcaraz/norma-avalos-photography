import React from 'react'
import Layout from '../../containers/layout'
import Link from 'next/link'
import GalleryCarousel from '../../components/galleryCarousel'
import BackToGallery from '../../components/backToGallery'
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
        /*this should be it's own component*/
        <Layout title="Branding Gallery">
            <BackToGallery></BackToGallery>
            <h1 class="text-center dawn-new-day">Branding Gallery</h1>
            <GalleryCarousel images={images}></GalleryCarousel>
        </Layout>
    )
}

export default BrandingGallery
