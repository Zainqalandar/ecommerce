import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const { userid } = useParams
    const navigate = useNavigate()
    console.log(userid)
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                        404
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                        Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Sorry, we can't find that page. You'll find lots to explore on the home
                        page.{" "}
                    </p>
                    <button
                    onClick={()=> navigate(-1)}
                    className=' bg-blue-800 m-2 p-3 rounded-lg text-white hover:bg-blue-600'
                    >Back to Home page</button>
                </div>
            </div>
        </section>

    )
}

export default User