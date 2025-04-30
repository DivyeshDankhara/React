import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import happyclient_img1 from '../asset/Happyclient_img1.png';
import happyclient_img2 from '../asset/Happyclient_img2.png';
import happyclient_img3 from '../asset/Happyclient_img3.png';
import happyclient_img4 from '../asset/Happyclient_img4.png';
import happyclient_logo1 from '../asset/Happyclient_logo1.png';
import happyclient_logo2 from '../asset/Happyclient_logo2.png';
import happyclient_logo3 from '../asset/Happyclient_logo3.png';
import happyclient_logo4 from '../asset/Happyclient_logo4.png';
import happyclient_logo5 from '../asset/Happyclient_logo5.png';
import happyclient_logo6 from '../asset/Happyclient_logo6.png';
import { MdStar } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";


let Clients = [
    {
        id: 1,
        tittle: 'Best Online Fashion Site',
        description: 'I always find something stylish and affordable on this web fashion site .',
        name: 'Robert smith',
        from: 'USA',
        img: happyclient_img1,
        img_desc: 'Jersey thong body',
        price: 105.95

    },
    {
        id: 2,
        tittle: 'Greate Selection and Quality',
        description: 'I love the variety of styles and the high-quality clothing on this web fashion site',
        name: 'Allen Lyn',
        from: 'France',
        img: happyclient_img2,
        img_desc: 'Cotton jersey top',
        price: 7.95

    },
    {
        id: 3,
        tittle: 'Best Online Fashion Site',
        description: 'I finally founsd a web fashion site with stylish and flattering options in my size.',
        name: 'Peter Rope',
        from: 'USA',
        img: happyclient_img3,
        img_desc: 'Ribbed modal T-shirt',
        price: 18.95

    },
    {
        id: 4,
        tittle: 'Greate Selection and Quality',
        description: 'I love the variety of styles and the high-quality clothing on this web fashion site',
        name: 'Hellen Ase',
        from: 'Japan',
        img: happyclient_img4,
        img_desc: 'Customer from Japan',
        price: 16.95

    },
]

let icons_images = [
    {
        id: 1,
        logo_img: happyclient_logo1
    },
    {
        id: 2,
        logo_img: happyclient_logo2
    },
    {
        id: 3,
        logo_img: happyclient_logo3
    },
    {
        id: 4,
        logo_img: happyclient_logo4
    },
    {
        id: 5,
        logo_img: happyclient_logo5
    },
    {
        id: 6,
        logo_img: happyclient_logo6
    }
]

const HappyClient = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
        ]
    };
    return (
        <div className="">
            <div className='overflow-x-hidden'>
                <div className='flex flex-col justify-center items-center mb-10 mt-20'>
                    <p className='text-xl font-normal mb-4 md:text-3xl xl:text-4xl'>Happy Clients</p>
                    <p >Hear what they say about us</p>
                </div>
                <Slider {...settings} className="Happyclient">
                        {
                            Clients.map((current, index) => {
                                return (

                                    <Clients_slider key={current.id} details={current} />

                                );
                            })}

                </Slider>
                <div className='my-20 h-full '>
                    {
                        icon_img_slider()
                    }
                </div>

            </div>
        </div>
    );
}

export default HappyClient

function Clients_slider({ details }) {
    return (

        <div className='mx-4'>

            <div className='border px-5 pt-8 pb-4 rounded-xl'>
                {/* review star icon section */}

                <div className='flex gap-2 text-xl'>
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                </div>
                <div className="pt-3">
                    <p className='text-lg font-semibold'>{details.tittle}</p>
                    <p className="pt-3 text-base">"{details.description}"</p>
                </div>  
                <div className="pt-3">
                    <p className='text-sm font-semibold'>{details.name}</p>
                    <p className="text-sm font-normal">Customer from {details.from}</p>
                </div>
                <hr className="mt-8 pt-5" />
                <div className="">
                    <div className='flex gap-3 items-center'>
                        <div className="h-fit w-fit">
                            <a href="">
                                <img
                                    src={details.img}
                                    alt="Laptop"
                                    className="h-fit"
                                />
                            </a>
                        </div>
                        <div className="p-4 w-full">
                            <a href='' className="inline-flex items-center text-md duration-300 hover:duration-300">
                                {details.img_desc}
                            </a>
                            <p className="mt-3 text-sm text-gray-900 flex items-center font-bold">
                                <BiDollar /> {details.price}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

const icon_img_slider = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 0,
        initialSlide: 0,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        accessibility: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
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
                    dots: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
        ]
    };

    return (
        <>  
        <div className=''>


            <div className="slider-container mx-4 overflow-hidden">
                <Slider {...settings} className="Happyclient_logo">
                    {
                        icons_images.map((currents, index) => {
                            return (

                                <Image_sliders key={currents.id} detail={currents} />

                            );
                        })

                    }

                </Slider>
            </div>
        </div>
        </>
    )
}   

function Image_sliders({ detail }) {

    return (
        <div className='border flex items-center justify-center p-4 '>

            <img src={detail.logo_img} alt="" className='' />
        </div>
    )
}