import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Store/DataSlice'

const Detail = () => {
    const { slug } = useParams()
    let string = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    const cardd = useSelector(state => state.store.Storecards)
    const value = cardd.filter(card => card.title === string)
    const dispatch = useDispatch()
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                {value.map((card) => (
                    <div key={card.id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={card.image}
                                        alt="Product Image"
                                    />
                                </div>
                                <div className="flex -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                            Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                    {card.title}
                                </h2>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">
                                            Price:
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-300 ml-2">{card.price}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">
                                            Availability:
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-300 ml-2">{card.rating.count}</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Select Color:
                                    </span>
                                    <div className="flex items-center mt-2">
                                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
                                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
                                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
                                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Select Size:
                                    </span>
                                    <div className="flex items-center mt-2">
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                            S
                                        </button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                            M
                                        </button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                            L
                                        </button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                            XL
                                        </button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                            XXL
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Product Description:
                                    </span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        {card.description}
                                    </p>
                                    <button
                                        className=" my-3 w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                        onClick={() => dispatch(addToCart(card))}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Detail