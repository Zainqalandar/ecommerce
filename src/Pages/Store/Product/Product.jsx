import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <section className=" bg-white py-12 text-gray-700 sm:py-16 lg:py-10 ">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md text-center">
                    <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                        Our featured Aroma Range
                    </h2>
                    <p className=" text-base text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus
                        massa dignissim tempus.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
                    <Link to='/store/boysho'>
                        <article className="relative border border-black">
                            <div className="aspect-square overflow-hidden">
                                <img
                                    className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                                    src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
                                    alt=""
                                />
                            </div>
                            <div className="absolute top-0 m-1 rounded-full bg-white">
                                <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                                    Sale
                                </p>
                            </div>
                            <div className="mt-4 flex items-start justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="" className="cursor-pointer">
                                            Boy's Shoes
                                            <span className="absolute" aria-hidden="true" />
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <button className=" border border-red-800 w-full bg-gray-800 text-white flex justify-between p-1">
                                <p className="text-xl font-medium leading-5 ">See More</p>
                                <img
                                    className="dark:hidden"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1.svg"
                                    alt="arrow"
                                />
                            </button>
                        </article>
                    </Link>
                    <Link to='/store/girlsho'>
                        <article className="relative">
                            <div className="aspect-square overflow-hidden">
                                <img
                                    className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                                    src="https://plus.unsplash.com/premium_photo-1668268751339-738ebf6df6c3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHNob2VzfGVufDB8fDB8fHww"
                                    alt=""
                                />
                            </div>
                            <div className="mt-4 flex items-start justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="" className="cursor-pointer">
                                            Girl's Shoes
                                            <span className="absolute" aria-hidden="true" />
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <button className=" border border-red-800 w-full bg-gray-800 text-white flex justify-between p-1">
                                <p className="text-xl font-medium leading-5 ">See More</p>
                                <img
                                    className="dark:hidden"
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1.svg"
                                    alt="arrow"
                                />
                            </button>
                        </article>
                    </Link>
                    <Link to='/store/girlshirt'>
                    <article className="relative">
                        <div className="aspect-square overflow-hidden">
                            <img
                                className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fHww"
                                alt=""
                            />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                            <div className="">
                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                    <a href="#" title="" className="cursor-pointer">
                                        Siberian Perfum
                                        <span className="absolute" aria-hidden="true" />
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <button className=" border border-red-800 w-full bg-gray-800 text-white flex justify-between p-1">
                            <p className="text-xl font-medium leading-5 ">See More</p>
                            <img
                                className="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1.svg"
                                alt="arrow"
                            />
                        </button>
                    </article>
                    </Link>
                    <article className="relative">
                        <div className="aspect-square overflow-hidden">
                            <img
                                className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                                alt=""
                            />
                        </div>
                        <div className="mt-4 flex items-start justify-between">
                            <div className="">
                                <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                    <a href="#" title="" className="cursor-pointer">
                                        Danish Levoune
                                        <span className="absolute" aria-hidden="true" />
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <button className=" border border-red-800 w-full bg-gray-800 text-white flex justify-between p-1">
                            <p className="text-xl font-medium leading-5 ">See More</p>
                            <img
                                className="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1.svg"
                                alt="arrow"
                            />
                        </button>
                    </article>
                </div>
            </div>
            <Outlet />
        </section>

    )
}

export default Product