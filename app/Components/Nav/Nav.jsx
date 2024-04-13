'use client';
import styles from './Nav.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Nav = () => {

    const pathname = usePathname();
    
    return (


        <div className={styles.header__main__container}>

            <div className={styles.header__container}>


                <div className={styles.header__logo__container}>
{pathname === '/' ? <h1 className={styles.header__logo}>Pleyada</h1> : <Link href='/' className={styles.header__logo}>Pleyada</Link> }


                    
                </div>
                <nav className={styles.nav}>
                    <a href='#comments' className={styles.a}>Отзывы клиентов</a>
                    {pathname === '/' ? <a href='#slogan' className={styles.a}>Полезная информация</a> : <a href='/#slogan' className={styles.a}>Полезная информация</a> }
                    
                    
                    <a href="#feedback" className={styles.a}>Наши контакты</a>

                </nav>
            </div>

        </div>


    )
}