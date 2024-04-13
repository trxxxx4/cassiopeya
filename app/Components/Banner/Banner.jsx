

import styles from './Banner.module.css'




export const Banner =() =>{


    return(
        <div className={styles.banner__main__container}>
            
            
            <div id={styles.second__banner__container} className={styles.banner__container}>
            <h2  className={styles.text__2}>Автомобиль дарит незабываемые эмоции</h2>
                <img className={styles.image__2} src='https://sun9-53.userapi.com/impg/Jz6gLhZkbrc_WOvtGK-0_xzb8eUYc__Tf0iiaA/SeBjRkmFQ74.jpg?size=1343x473&quality=96&sign=6db8872126be9023c0c801e9fa88af7d&type=album'/>
            </div>
            <div className={styles.banner__container} id={styles.first__banner__container}>
                <h2 className={styles.text__1}>В процессе совершенствования, достигается идеал</h2>
                <img className={styles.image__1} src='https://sun9-7.userapi.com/impg/zM8vv0DVVlS9KnITox0uwAACH1aogjP9ThBdTQ/vgbbGYGtzTs.jpg?size=1511x473&quality=96&sign=28e1a4b06556b7d17f05bedcf8d921f1&type=album'/>
            </div>
            <div id={styles.third__banner__container} className={styles.banner__container}>
            <h2  className={styles.text__3}>Когда каждый день наполнен открытиями, жизнь становится ярче</h2>
                <img className={styles.image__3} src='https://sun9-36.userapi.com/impg/08p3TkNMOytFK4OCmBW4DyP3hizhZkDg101NyQ/kjkRdQB1hwA.jpg?size=1188x418&quality=96&sign=3ec9bf9a93f781f8dedef1062dec114a&type=album'/>
            </div>
            
            
        </div>
    )


}