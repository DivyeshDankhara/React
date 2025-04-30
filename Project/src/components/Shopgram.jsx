import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shop_img_1 from '../asset/Shopgeram1.jpg'
import shop_img_2 from '../asset/Shopgeram2.jpg'
import shop_img_3 from '../asset/Shopgeram3.jpg'
import shop_img_4 from '../asset/Shopgeram4.jpg'
import shop_img_5 from '../asset/Shopgeram5.jpg'


let icons_images = [
    {
        id: 1,
        icon_img: shop_img_1
    },
    {
        id: 2,
        icon_img: shop_img_2
    },
    {
        id: 3,
        icon_img: shop_img_3
    },
    {
        id: 4,
        icon_img: shop_img_4
    },
    {
        id: 5,
        icon_img: shop_img_5
    },

]




const Shopgram = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,

        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        accessibility: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1149,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,

                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true,
                    accessibility: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                    swipeToSlide: true,
                    swipe: true,
                    touchMove: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    swipeToSlide: true,
                    swipe: true,
                    touchMove: true,
                }
            }
        ]
    };

    return (
        <div className='h-fit pb-16'>
            <div className='flex flex-col items-center gap-3 mb-8 px-4'>
                <p className='text-2xl'>Shop gram</p>
                <p className='text-center'>Inspire and let yourself be inspired, from one unique fashion to another.</p>

            </div>

            <div className="slider-container mx-4 ">
                <Slider {...settings} className='Shopgram'>
                    {
                        icons_images.map((currents, index) => {
                            return (

                                <Shop_details key={currents.id} detail={currents} />

                            );
                        })

                    }

                </Slider>
            </div>
        </div>
    )
}

export default Shopgram


function Shop_details({ detail }) {

    return (

        <div className='border flex items-center justify-center mx-1 rounded-xl overflow-hidden'>
            <img src={detail.icon_img} alt="" className='rounded-xl hover:scale-105 duration-1000 hover:duration-1000 ' />
        </div>


    )
}