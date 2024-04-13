
import styles from "./Header.module.css";

import { data } from "@/app/data";
import { Cardlist } from "../Cardlist/Cardlist";
import { Link } from "react-router-dom";
export const Header = () => {
    const price = data.find((item)=>{
        return item.model == 'Subaru Outback';
    })
    return (
        
        <header className={styles.header}>
            
            <div className={styles.info__block}>
                <h2 className={styles.title}>Новая Subaru Outback <br />{` от ${price.price}  ₽`}</h2>

                <a className={styles.choose__auto__a} href='#cardlist'>Выберите  авто своей мечты</a>
            </div>
            <h1 id='slogan' className={styles.slogan}>Японское качество, проверенное годами</h1>

        </header>
        
    )
}