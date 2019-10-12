import React from 'react'

const GalleryCarousel = ({ images }) => {
    return (
        <div className="container d-flex justify-content-center">
            <div
                id="galleryImages"
                className="carousel slide"
                data-ride="carousel"
                style={{ height: '400px' }}
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#galleryImages"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#galleryImages" data-slide-to="1"></li>
                    <li data-target="#galleryImages" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner h-100">
                    {images.map((image, i) => {
                        return (
                            <div
                                className={`carousel-item h-100 ${
                                    i === 0 ? 'active' : ''
                                }`}
                                key={image.alt}
                            >
                                <img
                                    className="d-block h-100"
                                    src={image.src}
                                    alt={image.alt}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex justify-content-around">
                    <a
                        className="link"
                        href="#galleryImages"
                        role="button"
                        data-slide="prev"
                    >
                        Previous
                    </a>
                    <a
                        className="link"
                        href="#galleryImages"
                        role="button"
                        data-slide="next"
                    >
                        Next
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel
