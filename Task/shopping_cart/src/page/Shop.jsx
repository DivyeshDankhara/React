import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add_item } from '../redux/Action'
import { Data } from '../data/Data'

const Shop = () => {

    const dispatch = useDispatch()

    return (
        <div className=''>

            <div className='grid grid-cols-3 gap-12 m-12'>

                {
                    Data.map((product) => {
                        return (
                            <div key={product.id}>


                                <div className='border p-2'>
                                    <div>
                                        <img src={product.image} alt="" className='size-30 object-contain mx-auto' />
                                    </div>
                                    <div className='leading-8 ' >
                                        <p className='line-clamp-1 text-slate-600 font-semibold'>{product.title}</p>
                                        <p className='line-clamp-3 text-justify'>{product.description}</p>
                                        <p className='text-left'><span className='font-semibold '>Price :</span> {product.price}$</p>
                                        <p className='text-left'> <span className='font-semibold'>Category :</span> {product.category}</p>
                                        <div className='text-left flex justify-between items-center'>
                                            <p><span className='font-semibold'>Count :</span> {product.rating.count}</p>
                                            <p><span className='font-semibold'>Rate :</span> {product.rating.rate}</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-4 justify-around ' >
                                        <button className='bg-blue-500 text-white px-2 py-1' onClick={() => dispatch(add_item(product))}>AddToCart</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Shop