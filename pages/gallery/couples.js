import React from 'react'
import Layout from '../../containers/layout'
import BackToGallery from '../../components/backToGallery'
import GalleryCarousel from '../../components/galleryCarousel'
const images = [
    {
        src: '/couple.jpg',
        alt: 'logo1',
    },
    {
        src: '/couple.jpg',
        alt: 'logo2',
    },
    {
        src: '/couple.jpg',
        alt: 'logo3',
    },
    {
        src: '/couple.jpg',
        alt: 'logo4',
    },
]
const CouplesGallery = () => {
    return (
        <Layout title="Couples Gallery">
          <BackToGallery></BackToGallery>
            <h1 class="dawn-new-day text-center">Couples Gallery</h1>
            <GalleryCarousel images={images}></GalleryCarousel>
        </Layout>
    )
}

export default CouplesGallery
