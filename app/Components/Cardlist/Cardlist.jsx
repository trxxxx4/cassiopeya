'use client';
import styles from './Cardlist.module.css';


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from '@/app/data';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Card } from '../Card/Card';
import './style.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Cardlist = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 950000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper} 
      >

        {data.map((item, index) => {

          let element = data.find((item) => {

            return item.id == index + 1

          })
          const props = element
          

          return (
            <SwiperSlide id='cardlist' className={styles.swiperSlide} >
              <Card props={props}  />
            </SwiperSlide>
          )
        })}




      </Swiper>
    </>
  );
}
