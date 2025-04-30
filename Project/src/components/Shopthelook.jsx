import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shopthelook_img1 from '../asset/shopthelook1.jpg';
import Shopthelook_img2 from '../asset/shopthelook2.jpg';

let Shop = [
    {
        id: 1,
        shopimg: Shopthelook_img1,
    },
    {
        id: 2,
        shopimg: Shopthelook_img2,
    }
];

const Shopthelook = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    accessibility: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                settings: "unslick",
            },
        },
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            swipe: true,
            swipeToSlide: true,
            touchMove: true,
            draggable: true,
            accessibility: true,
            arrows: true,
            dots: true,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden">
        <div className="mt-16">
            <div className="flex flex-col justify-center items-center m-4 gap-6 ">
                <p className="text-xl md:text-3xl">Shop the look</p>
                <p className="text-sm md:text-base">Inspire and let yourself be inspired, from one unique fashion to another.</p>
            </div>
        </div>
        <div className="slider-container">
            <Slider {...settings} className="shopslider overflow-x-hidden">
                {Shop.map((current) => {
                    return <Shopdetails key={current.id} details={current}/>;
                } )}
            </Slider> 
        </div>
    </div>
  );
}

export default Shopthelook;

function Shopdetails({ details }) {
    return (
        <div className="overflow-x-hidden">
            <img src={details.shopimg} alt="" className="object-cover w-full"/>
        </div>
    )
}