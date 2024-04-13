'use client'

import styles from './DetalCardStyles.module.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Styles.css';
import { comments } from '@/app/data';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Comments } from '../Comments/Comments';

export const DetalCard = (prop) => {

  const props = prop.props;
  const image1 = props.detalImages.image1;
  const image2 = props.detalImages.image2;
  const image3 = props.detalImages.image3;
  const image4 = props.detalImages.image4;
  const image5 = props.detalImages.image5;

  const data = comments.filter((item)=>{
    return item.carId == props.id;
  })  

  return (

    <main className={styles.main}>
      <div className={styles.main__container}>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper" id='swiper'
        >
          <SwiperSlide id='swiper__slide'>


            <div style={{
              backgroundImage: `url("${image1}")`,
              backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", display: "block", height: "100%"
            }} ></div>
          </SwiperSlide>
          <SwiperSlide id='swiper__slide'> 

            <div style={{
              backgroundImage: `url("${image2}")`,
              backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", display: "block", height: "100%"
            }} ></div>
          </SwiperSlide>
          <SwiperSlide id='swiper__slide'>

            <div style={{
              backgroundImage: `url("${image3}")`,
              backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", display: "block", height: "100%"
            }} ></div>
          </SwiperSlide>
          <SwiperSlide id='swiper__slide'>

            <div style={{
              backgroundImage: `url("${image4}")`,
              backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", display: "block", height: "100%"
            }} ></div>
          </SwiperSlide>
          <SwiperSlide id='swiper__slide'>

            <div style={{
              backgroundImage: `url("${image5}")`,
              backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100%", display: "block", height: "100%"
            }} ></div>
          </SwiperSlide>

        </Swiper>



        <div className={styles.main__text__container}>
          <h1>{props.model}</h1>




          <div className={styles.flex__container}>

            <div className={styles.main__flex__div}>

              <div className={styles.flex__div}>
                <h3 className={styles.h3}>Год выпуска</h3>
                <h3 className={styles.h3}>Объём двигателя</h3>
                <h3 className={styles.h3}>Мощность двигателя</h3>
                <h3 className={styles.h3}>Разгон до 100 км/ч</h3>
                <h3 className={styles.h3}>Привод</h3>
              </div>


              <div className={styles.flex__div}>
                <h3 className={styles.h3}>{props.year}</h3>
                <h3 className={styles.h3}>{`${props.engineСapacity} л`}</h3>
                <h3 className={styles.h3}>{`${props.enginePower} л.с`}</h3>
                <h3 className={styles.h3}>{props.boost}</h3>
                <h3 className={styles.h3}>{props.drive}</h3>
              </div>

            </div>

            <div className={styles.description__container}>
            <h2 className={styles.description}>{props.description}</h2>
            </div>
            




          </div>

        </div>
        <Comments props={data}/>

      </div>


    </main>

  )
}


