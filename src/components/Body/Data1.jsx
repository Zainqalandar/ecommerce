import React from 'react'

const Data1 = () => {
  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">
              Renovate your home
            </p>
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-3/5">
            <p className="text-base leading-6 text-gray-600 dark:text-white">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="mt-16 w-full">
            <button className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200  flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
              <p className="text-xl font-medium leading-5 ">See More</p>
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1.svg"
                alt="arrow"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cta-III-svg1dark.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
          <div className="">
            <img
              className="hidden lg:block"
              src="https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnRzfGVufDB8fDB8fHww"
              alt="sofa"
            />
            <img
              className="w-80 sm:w-auto lg:hidden"
              src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png"
              alt="sofa"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
            <div>
              <img
                className="hidden lg:block"
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                alt="chairs"
              />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                alt="chairs"
              />
            </div>
            <div>
              <img
                className="hidden lg:block"
                src="https://images.unsplash.com/photo-1519707574798-77140649cfe5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
                alt="chairs"
              />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png"
                alt="chairs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Data1