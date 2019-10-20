import React, {useEffect} from 'react'
import Layout from '../containers/layout'
import GalleryNav from '../components/galleryNav'
import fetch from 'isomorphic-unfetch'



const Gallery = ({stuff}) => {
console.log("props", stuff)
    useEffect(()=>{
        var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    console.log("baseUrl", baseUrl)
    })
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

Gallery.getInitialProps = async ({ req }) => {
    console.log("process.env.AIRTABLE_API", process.env.AIRTABLE_API)
    console.log("req", req)
    const basePath = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : 'https://yourdomain.com'
//    const res = await fetch("https://api.airtable.com/v0/appxq7iTOEHVbUIdg/Gallery?maxRecords=3&view=Grid%20view", {
//         method: "GET",
//         headers: {"Authorization": `Bearer keyBihNAgWRI2eMPP`,
//                   "Content-Type": "application/json"},
    
//       })
     
     // .then((res) =>  res)
      //.catch(error => (error))
     const res = await fetch(basePath +'/.netlify/functions/gallery')
     const json = await res.json()
   console.log("response", json)
   return { stuff: json }
  }

export default Gallery
