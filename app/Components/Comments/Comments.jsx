'use client';
import styles from './Comments.module.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { usePathname } from 'next/navigation';
import './styles.css';
import { Comment } from '../Comment/Comment';
// import required modules
import { Pagination } from 'swiper/modules';
import { comments } from '@/app/data';
export const Comments = (prop) => {
    const props = prop.props;
        const pathname = usePathname();





    return (
<>
        <div className={styles.flex__main__div} id='comments'>

{pathname == '/'? <h2 className={styles.h2}>Отзывы наших клиентов</h2>: <h2 className={styles.h2}>Отзывы клиентов по данной модели</h2>}
            
        </div>

        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >


            {props.map((item, index) => {

                const info = item;
                
                return (
                    <SwiperSlide >
                        <Comment props={info} />
                    </SwiperSlide>
                )
            })}
            
        </Swiper>

        </>



    )
}





