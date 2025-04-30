import React from 'react'

import best_sell_1 from '../asset/B1.jpg'
import best_sell_2 from '../asset/B2.jpg'
import best_sell_3 from '../asset/B3.jpg'
import best_sell_4 from '../asset/B4.jpg'
import best_sell_5 from '../asset/B5.jpg'
import best_sell_6 from '../asset/B6.jpg'
import best_sell_7 from '../asset/B7.jpg'
import best_sell_8 from '../asset/B8.jpg'
import best_sell_9 from '../asset/B9.jpg'
import best_sell_10 from '../asset/B10.jpg'
import best_sell_11 from '../asset/B11.jpg'
import best_sell_12 from '../asset/B12.jpg'

import best_hover_1 from '../asset/BH1.jpg'
import best_hover_2 from '../asset/BH2.jpg'
import best_hover_3 from '../asset/BH3.jpg'
import best_hover_4 from '../asset/BH4.jpg'
import best_hover_5 from '../asset/BH5.jpg'
import best_hover_6 from '../asset/BH6.jpg'
import best_hover_7 from '../asset/BH7.jpg'
import best_hover_8 from '../asset/BH8.jpg'
import best_hover_9 from '../asset/BH9.jpg'
import best_hover_10 from '../asset/BH10.jpg'
import best_hover_11 from '../asset/BH11.jpg'
import best_hover_12 from '../asset/BH12.jpg'

import { BiDollar } from "react-icons/bi";
const bestseller = [
    {
        id: 1,
        best_sell_img: best_sell_1,
        description: "Ribbed Tank Top",
        price: 16.95
    },
    {
        id: 2,
        best_sell_img: best_sell_2,
        description: "Ribbed modal T-shirt",
        price: 18.95
    },
    {
        id: 3,
        best_sell_img: best_sell_3,
        description: "Oversized Printed T-shirt",
        price: "10.00"
    },
    {
        id: 4,
        best_sell_img: best_sell_4,
        description: "Oversized Printed T-shirt",
        price: 16.95
    },
    {
        id: 5,
        best_sell_img: best_sell_5,
        description: "V-neck linen T-shirt",
        price: 114.95
    },
    {
        id: 6,
        best_sell_img: best_sell_6,
        description: "Loose Fit Sweatshirt",
        price: "10.00"
    },
    {
        id: 7,
        best_sell_img: best_sell_7,
        description: "Regular Fit Oxford Shirt",
        price: "10.00"
    },
    {
        id: 8,
        best_sell_img: best_sell_8,
        description: "Loose Fit Hoodie",
        price: 9.95
    },
    {
        id: 9,
        best_sell_img: best_sell_9,
        description: "Patterned scarf",
        price: 14.95
    },
    {
        id: 10,
        best_sell_img: best_sell_10,
        description: "Slim Fit Fine-knit Turtleneck Sweater",
        price: 18.95
    },
    {
        id: 11,
        best_sell_img: best_sell_11,
        description: "Slim Fit Fine-knit Turtleneck Sweater",
        price: 18.95
    },
    {
        id: 12,
        best_sell_img: best_sell_12,
        description: "Slim Fit Fine-knit Turtleneck Sweater",
        price: 18.95
    },
]

const BestSeller = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-14 p-10 md:mt-16 '>
            <p className='text-2xl md:text-4xl'>Best Seller</p>
            <p className='mt-4 text-sm md:text-lg'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>
        <div className='grid grid-cols-2 gap-4 mx-4 md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:mx-8 xl:grid-cols-4 xl:mx-12'>
            {
                bestseller.map((current) => {

                    return (
                            <Sellerdetails key={current.id} details={current} />

                        )
                    }
                    )
            }
        </div>
        <div className='flex justify-center mt-10'>
            <button className='border px-7 py-2 border-black rounded-sm hover:border-red-700 hover:text-red-700'>Load more</button>
        </div>
    </div>
    
  )
}

export default BestSeller

function Sellerdetails({details}) {

    return (
        <div className='h-fit'>
            <div className='h-fit w-fit'>
                <div className=''>
                    <img src={details.best_sell_img} alt=""
                        className='rounded-xl'
                    />
                </div>
                <div className='pt-4'>
                    <p>{details.description}</p>
                    <p className='flex items-center'><BiDollar />{details.price}</p>
                </div>
            </div>
        </div>
    )
}