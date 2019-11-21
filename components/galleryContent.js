import React from 'react'
import Layout from '../containers/layout'
import BackToGallery from './backToGallery'
import GalleryCarousel from './galleryCarousel'

const GalleryContent = ({ title, images }) => {
    return (
        <Layout title={title}>
            <BackToGallery></BackToGallery>
            <h1 className="text-center primary-font">{title}</h1>
            <GalleryCarousel images={images}></GalleryCarousel>
        </Layout>
    )
}

export default GalleryContent
