import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categary_img1 from "../asset/collection-17.jpg";
import categary_img2 from "../asset/collection-14.jpg";
import categary_img3 from "../asset/collection-18.jpg";
import categary_img4 from "../asset/collection-15.jpg";
import categary_img5 from "../asset/collection-20.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

let Category = [
  {
    id: 1,
    categoryImage: categary_img1,
    btnDescription: "Clothing",
  },
  {
    id: 2,
    categoryImage: categary_img2,
    btnDescription: "Sunglasses",
  },
  {
    id: 3,
    categoryImage: categary_img3,
    btnDescription: "Bags",
  },
  {
    id: 4,
    categoryImage: categary_img4,
    btnDescription: "Fashion",
  },
  {
    id: 5,
    categoryImage: categary_img5,
    btnDescription: "Accessories",
  },
];

const CategorySlide = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className="overflow-x-hidden mx-4 my-6">
        <div className="flex justify-between md:justify-start md:gap-4">
            <div className="flex order-2 items-center gap-2 md:order-1">
                <a
                    href=""
                    className="border border-black rounded-full text-xl p-1 hover:bg-black hover:text-white"
                >
                    <IoIosArrowBack />
                </a>
                <a
                    href=""
                    className="border border-black rounded-full text-xl p-1 hover:bg-black hover:text-white"
                >
                    {" "}
                    <IoIosArrowForward />
                </a>
            </div>
            <p className="order-1 text-lg font-semibold md:order-2">SHOP BY CATEGORIES</p>
        </div>
        <br />
        <div className="md:flex">
          <div className="md:w-[65%] lg:w-[75%]">
              <Slider {...settings} className="">
                  {Category.map((current, index) => {
                      return <CategoryDetails key={current.id} details={current} />;
                  })}
              </Slider>
          </div>
          <div className="border border-black rounded-md flex items-center justify-around text-2xl p-2 md:m-2 md:flex-col md:items-start md:text-3xl md:p-8 md:w-[35%] lg:w-[25%]">
            <p>Discovery all new items</p>
            <p className="border border-black rounded-full p-2 hover:bg-black hover:text-white md:text-xl md:p-4"><MdArrowOutward /></p>
          </div>
        </div>
    </div>
  );
};

export default CategorySlide;

function CategoryDetails({ details }) {
  return (
    <div className="group">
      <div className="relative rounded-md h-fit m-2 overflow-hidden">
        <img
          src={details.categoryImage}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover group-hover:scale-105 hover:duration-1000 duration-1000"
        />
        <div className="absolute bottom-4 text-left">
          <button className="group/item mt-2 inline-flex rounded cursor-pointer items-center text-sm hover:text-smfont-semibold text-black bg-white p-2 gap-2 hover:bg-black hover:text-white">
            {details.btnDescription}
            <MdArrowOutward className="hidden group-hover/item:block" />
          </button>
        </div>
      </div>
    </div>
  );
}
