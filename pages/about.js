import React from 'react'
import Layout from '../containers/layout'

const About = () => {
    return (
        <Layout title="Meet Norma">
            <div className="d-flex justify-content-center">
                <h1 className="mt-2 display-4 meet-title primary-font text-center">
                    Hello! I'm Norma
                </h1>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mt-3 justify-content-center">
                <div className="card w-100 m-md-4">
                    <img src="/norma_002_md.jpg" className="img-fluid"></img>
                </div>
                <div className="card w-100  m-md-4">
                    <img src="/norma_md.jpg" className="img-fluid"></img>
                </div>
                <div className="card w-100 m-md-4">
                    <img src="/norma_004_md.jpg" className="img-fluid"></img>
                </div>
            </div>
            <div className="d-flex justify-content-center ">
                <h2 className="text-uppercase mt-2 primary-font text-center">
                    Hello! I'm Norma. The person behind the camera.
                </h2>
            </div>
          
        </Layout>
    )
}

export default About
