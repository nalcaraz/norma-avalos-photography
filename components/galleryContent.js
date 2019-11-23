import React from 'react';
import Layout from '../containers/layout';
import BackToGallery from './backToGallery';
import GalleryCarousel from './galleryCarousel';

const GalleryContent = ({ title, images }) => {
  //  console.log("images", images)
    return (
        <Layout title={title}>
            <BackToGallery></BackToGallery>
            <h1 className="text-center primary-font">{title}</h1>
            {images && images.length > 0 ? (
                <GalleryCarousel images={images}></GalleryCarousel>
            ):(
                <p className="primary-font text-center mt-5">Waiting to take beautiful photos</p>
            )}
        </Layout>
    );
};

export default GalleryContent;
