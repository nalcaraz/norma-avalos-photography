import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Layout from '../../containers/layout';
import BackToGallery from '../../components/backToGallery';
import GalleryCarousel from '../../components/galleryCarousel';
import GalleryContent from '../../components/galleryContent';
import { server } from '../../config';

const GalleryType = ({ records }) => {
    return (
        <GalleryContent
            title={`${records.fields.Title || "Gallery"}`}
            images={records.fields.Images}
        ></GalleryContent>
    );
};
GalleryType.getInitialProps = async ({ req, query }) => {
    const res = await fetch(server + `/.netlify/functions/gallery?id=${query.id}`);
    const json = await res.json();

    return { records: json };
};
export default GalleryType;
