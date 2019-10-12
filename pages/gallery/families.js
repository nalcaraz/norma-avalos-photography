import React from 'react'
import Layout from '../../containers/layout'
import Link from 'next/link'
import BackToGallery from '../../components/backToGallery'
import GalleryCarousel from '../../components/galleryCarousel'
import GalleryContent from '../../components/galleryContent'
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
        <GalleryContent
            title="Families Gallery"
            images={images}
        ></GalleryContent>
    )
}

export default FamiliesGallery
