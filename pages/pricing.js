import React, { useEffect, useState } from 'react'
import Layout from '../containers/layout'

const packagestemp = [
    {
        name: 'Couples',
        description: 'This package includes:',
        includes: [
            '1 hour session at a location of your choosing (if the location requires permission or permit, client will be responsible for taking care of this).',
            '30 to 40 High Resolution Images',
            'Downloadable gallery (galleries can be password protected if desired)',
            'Price $175',
        ],
    },
    {
        name: 'Families',
        decription: 'This package includes:',
        includes: [
            '1 hour session at a location of your choosing (if the location requires permission or permit, client will be responsible for taking care of this).',
            'Maximum of 6 people. Add $10 for each additional person.',
            '30 to 40 High Resolution Images',
            'Downloadable gallery (galleries can be password protected if desired)',
            'Price $200',
        ],
    },
    {
        name: 'Seniors and College Graduates',
        description:
            'Various Packages are available please email me for the complete list of packages. Packages start at $200',
    },
    {
        name: 'Children',
        description: 'This package includes:',
        includes: [
            '1 hour session at a location of your choosing (if the location requires permission or permit, client will be responsible for taking care of this).',
            '20 to 30 High Resolution Images',
            'Downloadable gallery (galleries can be password protected if desired)',
            'Price $175',
        ],
    },
    {
        name: 'Branding',
        description:
            'If you need photos for your business, blog, company and branding yourself this package is for you. This package includes:',
        includes: [
            '1 hour session at a location of your choosing (if the location requires permission or permit, client will be responsible for taking care of this).',
            '10 to 15 High Resolution Images',
            'Downloadable gallery (galleries can be password protected if desired)',
            'Price $150',
            'If you would like more images you can add more images at $5 each.',
            'This package DOES NOT include product or sponsored photography',
        ],
    },
]

const Pricing = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        setPackages(packagestemp)
    })
    console.log('packages', packages)
    return (
        <Layout>
            <h1 className="primary-font text-center">Pricing</h1>
            {packages &&
                packages.length > 0 &&
                packages.map(p => {
                    return (
                        <div key={p.name} className="package-wrapper">
                            <hr></hr>
                            <h2 className="primary-font text-center">
                                {p.name}
                            </h2>
                            <p  className="lead primary-font text-uppercase">{p.description}</p>
                            <ul className="package">
                                {p.includes &&
                                    p.includes.length > 0 &&
                                    p.includes.map((o, i) => (
                                        <li
                                            className="primary-font text-uppercase"
                                            key={i}
                                        >
                                            <p className="lead">{o}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )
                })}
                <style jsx>{`
                .package-wrapper{
                    text-align: center;
                }
                .package {
                    display:inline-block;
                    text-align: left;

                }
                `}</style>
        </Layout>
    )
}

export default Pricing
