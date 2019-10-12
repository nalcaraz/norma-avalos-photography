import React from 'react'
import Layout from '../containers/layout'
import GalleryNav from '../components/galleryNav'

const Gallery = () => {
    return (
        <Layout title="Gallery">
          <h1 className="dawn-new-day text-center">Gallery</h1>
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
