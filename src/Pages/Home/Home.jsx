import React from 'react'
import { Banner, Bestsellers, Data1, Footer, Search } from '../../components'
import NewArrivals from '../../components/Body/NewArrivals'

const Home = () => {
    return (
        <div className=' border border-white mx-auto w-[96%] my-2'>
            <Search />
            <Banner />
            <Data1 />
            <NewArrivals />
            <Bestsellers />
            <Footer />
        </div>
    )
}

export default Home