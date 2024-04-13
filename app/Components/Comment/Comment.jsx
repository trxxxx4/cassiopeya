

import styles from './Comment.module.css';


export const Comment = (prop) =>{

    const props = prop.props;
    
    return(

        <div className={styles.comment__main__container}>

        <div className={styles.comment__container__wrapper}>
            <div style={{backgroundImage: `url("${props.avatar}")`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className={styles.avatar}>
        


            </div>

            <h2 className={styles.text}>
                {props.text}
            </h2>

        </div>

        </div>


    )
}

