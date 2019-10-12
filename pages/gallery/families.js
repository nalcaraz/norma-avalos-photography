import React from 'react'
import Layout from '../../containers/layout'
import Link from 'next/link'
import BackToGallery from '../../components/backToGallery'
import GalleryCarousel from '../../components/galleryCarousel'
const images = [
    {
        src: '/family.jpg',
        alt: 'logo1',
    },
    {
        src: '/family.jpg',
        alt: 'logo2',
    },
    {
        src: '/family.jpg',
        alt: 'logo3',
    },
    {
        src: '/family.jpg',
        alt: 'logo4',
    },
]
const FamiliesGallery = () => {
    return (
        
        <Layout title="Families Gallery">
            <BackToGallery></BackToGallery>
            <h1 class="dawn-new-day text-center"> Families Gallery</h1>
            <GalleryCarousel images={images}></GalleryCarousel>
        </Layout>
    )
}

export default FamiliesGallery
