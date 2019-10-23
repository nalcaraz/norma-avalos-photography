import React from 'react'
import Layout from '../../containers/layout'
import BackToGallery from '../../components/backToGallery'
import GalleryCarousel from '../../components/galleryCarousel'
import GalleryContent from '../../components/galleryContent'
import { server } from '../../config'
const images = [
    {
        src: '/couple.jpg',
        alt: 'logo1',
    },
    {
        src: '/couple.jpg',
        alt: 'logo2',
    },
    {
        src: '/couple.jpg',
        alt: 'logo3',
    },
    {
        src: '/couple.jpg',
        alt: 'logo4',
    },
]
const CouplesGallery = ({records}) => {

    return (
        <GalleryContent title="Couples Gallery" images={images}></GalleryContent>
    )
}
// CouplesGallery.getInitialProps = async ({ req }) => {
   
//     const res = await fetch(server + '/.netlify/functions/gallery');
//     const json = await res.json();

//     return { records: json };
// };
export default CouplesGallery
