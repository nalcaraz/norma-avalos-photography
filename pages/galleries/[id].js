
import React from 'react';
import GalleryContent from '../../components/galleryContent';
import { server } from '../../config';
import fetch from 'isomorphic-unfetch';

const GalleryType = ({ fields }) => {
   // console.log("fields"m)
    const {Title, Images} = fields;
    return (
        <GalleryContent
            title={`${Title || "Gallery"}`}
            images={Images}
        ></GalleryContent>
    );
};
GalleryType.getInitialProps = async ({  query }) => {
    const res = await fetch(server + `/.netlify/functions/gallery?id=${query.id}`);
    const json = await res.json();
console.log("json", json)
    return {...json.fields};
};
export default GalleryType;
