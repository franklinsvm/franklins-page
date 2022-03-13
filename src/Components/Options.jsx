import React from 'react'
import "./Options.css"
import OptionCard from './OptionCard'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from 'swiper'

const Options = () => {

  const swiper = document.querySelector(".swiper-comp")

  const onClickPrev = () => {
    const swiper2 = document.querySelector(".swiper-comp").swiper;
    swiper2.slidePrev();
  }

  const onClickNext = () => {
    const swiper2 = document.querySelector(".swiper-comp").swiper;
    swiper2.slideNext();
  }

  return (
    <div className="options-container">
        <div className="options-text">
        <h1>Your Options:</h1>
        <p>There are thousands of developers around. Choose yours carefully!</p>
        </div>
        <div className="swiper-slides">
        <Swiper className="swiper-comp" effect={"coverflow"} grabCursor={true} centeredSlides={true} initialSlide={2} slidesPerView={5} coverflowEffect={{rotate: 40, stretch: 0, depth: 100, modifier: 1, slideShadow: true,}} pagination={true} modules={[EffectCoverflow, Pagination]} >
          <SwiperSlide><OptionCard src="Imgs/dev1.png" name="Dev One" attributes="" className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/dev2.png" name="Dev Two" attributes="" className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/frank2.jpg" name="Franklin Martins" attributes="" className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/dev4.png" name="Dev Four" attributes="" className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/dev5.png" name="Dev Five" attributes="" className="swiper-slide" /></SwiperSlide>
        </Swiper>
        <div className="options-btn">
          <button className="opt-btn btn-left" onClick={onClickPrev}><ion-icon name="chevron-back-outline"></ion-icon></button>
          <button className="opt-btn btn-right" onClick={onClickNext}><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
        </div>
    </div>
  )
}

export default Options