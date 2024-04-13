

import styles from './Slogan.module.css'

export const Slogan = () => {


    return (

        <div className={styles.slogan__main__container} >
            <div className={styles.slogan__container__1}>
                <h2 className={styles.slogan__h2}>Живите. Наслаждайтесь.<br></br> Отдыхайте. Повторяйте.</h2>

                <div className={styles.h2__main__container}>

                    <div className={styles.h2__container}>
                        <h3 className={styles.slogan__h3} id={styles.slogan__h3__1}>Pleyada — это дилерский центр автомобилей марки Subaru, являющийся лидером рынка в Оренбурге и пользующийся доверием клиентов уже более 5 лет</h3>
                        <h3 className={styles.slogan__h3} id={styles.slogan__h3__2}>Присоединяйтесь к нам и наслаждайтесь незабываемыми поездками</h3>
                    </div>

                </div>



            </div>
            <a rel="noopener noreferrer" target='_blank' href='https://yandex.ru/maps/-/CDFL5Z9X' className={styles.slogan__container__2}>


                <div className={styles.slogan__container__2__main__text__div}>
                    <div className={styles.slogan__container__2__text__div}>
                        <h3 id={styles.find__us} className={styles.text__h3}>
                            Ищите нас здесь
                        </h3>
                        <h2 className={styles.text__h2}>
                            Pleyada
                        </h2>
                        <h3 className={styles.text__h3}>
                            Офис 23, переулок Саратовский 5, <br /> город Оренбург, Оренбургская область, <br></br> Россия
                        </h3>
                    </div>
                    <div className={styles.slogan__container__2__link}>
                        <h3 id={styles.h3__hover}  className={styles.text__h3}> Подробнее на картах ➤ </h3>

                    </div>
                </div>



                <div className={styles.slogan__container__2__map}>

                </div>




            </a>
        </div>

    )
}