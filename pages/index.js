import React from 'react'
import Layout from '../containers/layout'
import CardNav from '../components/cardNav'
import HomeCarousel from '../components/HomeCarousel'


const navs = [
    { path: '/gallery', label: 'Gallery', img: '/fatherson.jpg' },
    {
        path: '/about',
        label: 'Meet Norma',
        img: '/norma.jpg',
    },
    { path: '/clients', label: 'Clients', img: '/family.jpg' },
]
const Home = () => (
    <Layout title="Norma Avalos Photography">
       <HomeCarousel></HomeCarousel>
        <div className="container d-flex flex-column flex-md-row  justify-content-between mt-5">
            {navs.map(n => (
                <div className="w-100 p-1">                   
                    <CardNav
                        path={n.path}
                        label={n.label}
                        img={n.img}
                    ></CardNav>
                </div>
            ))}
        </div>
    </Layout>
)

export default Home
