'use client';

import Link from 'next/link';
import styles from './Card.module.css'

export const Card = (prop) => {
    
    const props = prop.props;
    const link = props.link;
    return (

        <div className={styles.card__main__container}>
            <div className={styles.card__container}>

                <div className={styles.card__first__container}>


                    <h2>{props.model}</h2>
                    <h3 className={styles.h3}>{`Год выпуска: ${props.year}`}</h3>
                    <h3 className={styles.h3}>{`Мощность: ${props.enginePower} л.с`}</h3>
                    <h3 className={styles.h3}>{`Объем двигателя: ${props.engineСapacity} л`}</h3>
                    <h3 className={styles.h3} id={styles.price}>{`Розничная цена: ${props.price} ₽`}</h3>

                    <Link className={styles.learn__more} href={link}>Узнать подробнее</Link>


                </div>

            </div>
            <div className={styles.card__container}>

                <div className={styles.card__second__container}>

                    <img src={props.image} className={styles.car__image}  alt={props.model} ></img>


                </div>

            </div>




        </div>

    )
}