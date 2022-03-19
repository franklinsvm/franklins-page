import React from 'react'
import "./Options.css"
import OptionCard from './OptionCard'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from 'swiper'

const Options = () => {

  const onClickPrev = () => {
    const swiper2 = document.querySelector(".swiper-comp").swiper;
    swiper2.slidePrev();
  }

  const onClickNext = () => {
    const swiper2 = document.querySelector(".swiper-comp").swiper;
    swiper2.slideNext();
  }

  return (
    <div className="options-container" id="options-id">
        <div className="options-text">
        <h1 className="section-title">Your Options:</h1>
        <p>There are thousands of developers around. Choose yours carefully!</p>
        </div>
        <div className="swiper-slides">
        <Swiper className="swiper-comp" effect={"coverflow"} grabCursor={true} centeredSlides={true} initialSlide={2} slidesPerView={"auto"} coverflowEffect={{rotate: 40, stretch: 0, depth: 100, modifier: 1, slideShadow: true,}} pagination={true} modules={[EffectCoverflow, Pagination]} >
          <SwiperSlide><OptionCard src="Imgs/dev1.png" name="Dev One" progressBar={{
            academic: 1,
            profExp: 2,
            creativity: 3,
            communication: 4,
            ethic: 5,
            learning: 6,
            skills: 7,
            potential: 8,
          }} className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/dev2.png" name="Dev Two" progressBar={{
            academic: 9,
            profExp: 10,
            creativity: 11,
            communication: 12,
            ethic: 13,
            learning: 14,
            skills: 15,
            potential: 16,
          }} className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/frank2.jpg" name="Franklin Martins" progressBar={{
            academic: 17,
            profExp: 18,
            creativity: 19,
            communication: 20,
            ethic: 21,
            learning: 22,
            skills: 23,
            potential: 24,
          }} className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/dev4.png" name="Dev Four" progressBar={{
            academic: 25,
            profExp: 26,
            creativity: 27,
            communication: 28,
            ethic: 29,
            learning: 30,
            skills: 31,
            potential: 32,
          }} className="swiper-slide" /></SwiperSlide>
          <SwiperSlide><OptionCard src="Imgs/dev5.png" name="Dev Five" progressBar={{
            academic: 33,
            profExp: 34,
            creativity: 35,
            communication: 36,
            ethic: 37,
            learning: 38,
            skills: 39,
            potential: 40,
          }} className="swiper-slide" /></SwiperSlide>
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