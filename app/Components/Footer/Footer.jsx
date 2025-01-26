'use client';
import { usePathname } from "next/navigation";
import { Nav } from "../Nav/Nav";
import styles from './Footer.module.css';
import Link from 'next/link';
export const Footer = () => {

    const pathname = usePathname();
    return (

        <footer className={styles.footer__padding}>

            <div className={styles.header__main__container}>

                <div className={styles.header__container}>


                    <div className={styles.header__logo__container}>
                        {pathname === '/' ? <h1 className={styles.header__logo}>Pleyada</h1> : <Link href='/' className={styles.header__logo}>Pleyada</Link>}



                    </div>
                    <nav className={styles.nav}>
                    <a href='#comments' className={styles.a}>Отзывы клиентов</a>
                    {pathname === '/' ? <a href='#slogan' className={styles.a}>Полезная информация</a> : <a href='/#slogan' className={styles.a}>Полезная информация</a> }
                    <a href="#feedback" className={styles.a}>Наши контакты</a>

                    </nav>
                </div>

            </div>

            <div className={styles.footer}>
                <div className={styles.footer__main__container}>
                    <div className={styles.footer__container}>
                        <a rel="noopener noreferrer" target='_blank' href="https://vk.com/voroninmixailgey" className={styles.a}>VKontakte</a>
                        <a rel="noopener noreferrer" target='_blank' href="https://t.me/nixtalk" className={styles.a}>Telegram</a>
                        <a rel="noopener noreferrer" target='_blank' href="https://youtu.be/fShlVhCfHig?si=eGzE0rn3-kAwIJtU" className={styles.a}>YouTube</a>
                    </div>
                </div>

            </div>
            <div className={styles.footer}>
                <div className={styles.footer__number} id='feedback'>
                    <div className={styles.number__div}>
                    <a className={styles.number} href="tel:+71234567890">+7-123-456-78-90</a>
                    <a className={styles.number} href="sb220507@gmail.com&body=Узнать подробнее?subject=Вопрос">Pleyada@gmail.com</a>
                    <a className={styles.number} href="https://janiuarycold.netlify.app/">Last project</a>
                    </div>
                    
                </div>

            </div>


        </footer>
    )
}