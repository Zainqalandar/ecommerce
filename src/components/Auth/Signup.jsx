import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl my-12">
            <div
                className="hidden bg-cover lg:block lg:w-1/2"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D")'
                }}
            />
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img
                        className="w-auto h-7 sm:h-8"
                        src="https://merakiui.com/images/logo.svg"
                        alt=""
                    />
                </div>
                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>
                <div className="mt-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                        htmlFor="LogginName"
                    >
                        Your name
                    </label>
                    <input
                        id="LogginName"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                    />
                </div>
                <div className="mt-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                        htmlFor="LoggingEmailAddress"
                    >
                        Email Address
                    </label>
                    <input
                        id="LoggingEmailAddress"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="email"
                    />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                            htmlFor="loggingPassword"
                        >
                            Password
                        </label>
                        <a
                            href="#"
                            className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                        >
                            Forget Password?
                        </a>
                    </div>
                    <input
                        id="loggingPassword"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="password"
                    />
                </div>
                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                    <Link
                        to="/signIn"
                        className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                    >
                        or sign In
                    </Link>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
                </div>
            </div>
        </div>
    )
}

export default Signup