import React from 'react'
import { Banner, Data1 } from '../../components'
import NewArrivals from '../../components/Body/NewArrivals'

const Home = () => {
    return (
        <div className=' border border-white mx-auto w-[96%] my-2'>
            <Banner />
            <Data1 />
            <NewArrivals />
        </div>
    )
}

export default Home