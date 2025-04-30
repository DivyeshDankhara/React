import React from 'react'
import Sliders from '../components/Sliders'
import MarqueSliders from '../components/MarqueSliders'
import CategorySlide from '../components/CategarySlider'
import BestSeller from '../components/BestSeller'
import Shopthelook from '../components/Shopthelook'
import HappyClient from '../components/HappyClient'
import Shop_gram from '../components/Shopgram'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Sliders />
      <MarqueSliders />
      <CategorySlide />
      <BestSeller />
      <Shopthelook />
      <HappyClient />
      <Shop_gram />
      <Footer />
    </div>
  )
}

export default Home
