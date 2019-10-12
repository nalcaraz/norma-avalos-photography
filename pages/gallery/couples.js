import React from 'react'
import Layout from '../../containers/layout'
import BackToGallery from '../../components/backToGallery'
import GalleryCarousel from '../../components/galleryCarousel'
import GalleryContent from '../../components/galleryContent'
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
        <GalleryContent title="Couples Gallery" images={images}></GalleryContent>
    )
}

export default CouplesGallery
