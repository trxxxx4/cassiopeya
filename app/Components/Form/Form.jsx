'use client';
import styles from './Form.module.css'
import { useState } from 'react';

export const Form = () =>{

    

    return(

<div className={styles.form__main__container}>

        <h2>Если вам понадобится дополнительная информация</h2>
    <form className={styles.form}>
        <input className={styles.input} type="email" name="" id="" placeholder='Введите почту' />
        <input className={styles.input} type="tel" name="" id="" placeholder='Введите номер телефона' />
        
        <button className={styles.button}>Отправить</button>
    </form>
</div>


    )
}