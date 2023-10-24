import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const cards = useSelector(state => state.store.Storecards)
    const filtered = cards.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            <form
                className=' mx-auto my-2 w-[90%] md:w-[80%] lg:w-1/2'
            >
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.currentTarget.value)}
                    />
                </div>
                <div className=' fixed z-10 bg-white overflow-y-auto max-h-60'>
                    {searchQuery &&
                        filtered.map((item) => (
                            <Link to={`/store/detail/${item.title.toLowerCase().replace(/ /g, "-")}`}>
                                <div
                                    className="max-w-[700px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                                >
                                    <img className="w-24" src={item.image} />
                                    <div className="flex flex-col gap-1">
                                        <p className="font-semibold text-lg">
                                            {item.title}
                                        </p>
                                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia aliquam autem atque accusantium qui? Provident, accusamus maiores similique in aspernatur dolor iure ratione, eius quasi quod, quidem quisquam porro.</p>
                                        <p className="text-sm">
                                            Price:{" "}
                                            <span className="text-primeColor font-semibold">
                                                ${item.price}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </form>

        </>
    )
}

export default Search