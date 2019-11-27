import React from 'react';
import GalleryContent from '../../components/galleryContent';
import { server } from '../../config';
import fetch from 'isomorphic-unfetch';

const CouplesGallery = ({ records }) => {
    // console.log("fields"m)
  //  const { Title, Images } = records.fields;
    return (
        <GalleryContent
            title={`${records.fields ? records.fields.Title : 'Gallery'}`}
            images={records.fields? records.fields.Images: []}
        ></GalleryContent>
    );
};
CouplesGallery.getInitialProps = async ({ query }) => {
    const res = await fetch(
        server + `/.netlify/functions/gallery?id=${query.id}`
    );
    const json = await res.json();
    return { records: json };
};
export default CouplesGallery;
