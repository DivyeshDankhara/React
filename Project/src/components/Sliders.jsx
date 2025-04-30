import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../asset/fashion-slideshow-01.jpg'
import sliderimg2 from '../asset/fashion-slideshow-02.jpg'
import sliderimg3 from '../asset/fashion-slideshow-03.jpg'

import { IoIosArrowForward } from "react-icons/io";

let HeroSlideDetails = [
  {
      tittle: ["Glamorous", "Glam"],
      description: "From casual to formal, we've got you covered",
      image: sliderimg1
  },
  {
      tittle: ["Simply", "Style"],
      description: "From casual to formal, we've got you covered",
      image: sliderimg2
  },
  {
      tittle: ["Glsmorous", "Glam"],
      description: "From casual to formal, we've got you covered",
      image: sliderimg3
  }
]

const Sliders_ = () => {

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 3000,
      cssEase: "linear"
  }
  return (
      <>
          {/* Home Main section start */}

          <div className="">

              {/* Slider Section Start */}
              <div className="slider-container overflow-x-hidden">
                  <div className="slider-container  overflow-x-hidden h-[50%]  ">


                      <Slider {...settings} className='HeroSlider'>

                          {HeroSlideDetails.map((current, index) => {
                              return (
                                  <>
                                      <HeroSlide details={current} />
                                  </>
                              );
                          })}

                      </Slider>
                  </div>

              </div>
              {/* Slider Section End */}


          </div>

          {/* Home Main section End */}
      </>
  );
}

const Sliders = () => {
  return (
    <div>
      <main>
        <Sliders_/>
      </main>
    </div>
  )
}

export default Sliders

function HeroSlide({ details }) {

  return (
      <>
          <div>
              <div style={{ backgroundImage: `url(${details.image})` }} className='h-[520px] md:h-[650px] lg:h-[800px] bg-cover bg-center relative'>
                  <div className='absolute z-40 w-full top-[30%] left-[5%] '>
                      <p className='text-3xl md:text-5xl lg:text-[80px]'> {details.tittle[0]} <br /> {details.tittle[1]}</p>
                      <p className='md:text-lg my-4 mb-6 max-md:hidden'>{details.description}</p>

                      <a href="" className="bg-black w-fit text-white text-md font-semibold rounded md:px-7 px-4 py-2 md:py-3 mt-4 flex items-center gap-1 relative before:absolute before:content-[''] before:BgGradientMove before:h-full before:w-full before:translate-x-[100%] hover:before:-translate-x-[150%] before:duration-1000 overflow-hidden z-0 before:-skew-x-12">
                          <span>Shop Collection</span>
                          <IoIosArrowForward className='text-white font-bold text-lg' />
                      </a>
                  </div>
              </div>
          </div>
      </>
  )
}