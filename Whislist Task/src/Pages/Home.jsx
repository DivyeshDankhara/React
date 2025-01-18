import React from 'react'
import { useEffect, useState } from 'react'
import { GoHeart } from "react-icons/go";

const Home = () => {

    const [data , setData] = useState([])

     console.log('Data', data);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => setData(res))
    } , [])

  return (
    <div className='flex flex-wrap justify-evenly gap-y-4'>
        {
                data.map((item) => {
                    return (
                        <>
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
                                <div className="flex flex-col items-center pb-10">
                                    <img
                                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                        src={item.image}
                                        alt="Bonnie image"
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                        {item.title}
                                    </h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {item.price}
                                    </span>
                                    <div className="flex mt-4 md:mt-6">
                                        <button className='text-red-800'>
                                          <GoHeart />
                                        </button>
                                        <a
                                            href="#"
                                            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>

                    )
                })
            }
    </div>
  )
}

export default Home
