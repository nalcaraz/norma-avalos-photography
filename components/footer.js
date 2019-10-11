import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div
                className="w-100 d-flex justify-content-between"
                style={{ bottom: '-50px' }}
            >
                <img src="/leaf.png" height="150px"></img>
                <img
                    src="/leaf.png"
                    height="150px"
                    style={{ transform: 'scaleX(-1)' }}
                ></img>
            </div>
        </footer>
    )
}
export default Footer
