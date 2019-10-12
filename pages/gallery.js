import React from 'react'
import Layout from '../containers/layout'
import GalleryNav from '../components/galleryNav'

const Gallery = () => {
    return (
        <Layout title="Gallery">
          
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-around">
                <GalleryNav
                    label="Couples"
                    img="/couple.jpg"
                    path="/gallery/couples"
                ></GalleryNav>
                <GalleryNav
                    label="Families"
                    img="/family.jpg"
                    path="/gallery/families"
                ></GalleryNav>
                <GalleryNav
                    label="Branding"
                    img="logo.png"
                    path="/gallery/branding"
                ></GalleryNav>
            </div>
        </Layout>
    )
}

export default Gallery
