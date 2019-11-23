import React, { useEffect } from 'react';
import Layout from '../containers/layout';
import GalleryNav from '../components/galleryNav';
import fetch from 'isomorphic-unfetch';
import {server} from '../config'

const Gallery = ({ records }) => {
    const { records: galleries } = records;
   //console.log(galleries)
    return (
        <Layout title="Gallery">
            <h1 className="primary-font text-center">Gallery</h1>
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-around">
                {/* {galleries &&
                    galleries.length > 0 &&
                    galleries.map(g => {
                        return (
                            <GalleryNav
                                key={g.id}
                                label={g.fields.Name}
                                img={
                                    g.fields.CoverImage &&
                                    g.fields.CoverImage[0].thumbnails.large.url
                                }
                                //path={`${g.fields.Path}/$`}
                               path={`/galleries/${g.fields.Gallery}`}
                            ></GalleryNav>
                        );
                    })} */}
            </div>
        </Layout>
    );
};
Gallery.getInitialProps = async ({ req }) => {
   
    const res = await fetch(server + '/.netlify/functions/galleryType');
    const json = await res.json();

    return { records: json };
};
export default Gallery;
