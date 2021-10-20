import React from "react";
import styles from './index.module.css'

function Photo({src="https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fjpierce%2Fj-pierce-promo-black-01.png?alt=media&token=5cf0cf0f-31fa-4ef2-9f21-eaa13659567b", alt, width=470, height=292}) {
    return (
       
        
            <a className={styles.photo} >
                <img className={styles.img}
                style={{ fontWeight: width, lineHeight:height}}
                src={src}
                alt={alt}
                />
            </a>
       
    )
}

export default Photo