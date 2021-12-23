import React from "react";
import styles from './index.module.css'


function link({src,alt,href}){
    return (
        <a className={styles.photo} >
            <img className={styles.img}
            src={src}
            alt={alt}
            href={href}
            />
        </a>   
)
}

function markLink({src,alt,href}){
    return(
        <a className={styles.markLink} >
        <img className={styles.mark}
        src={src}
        alt={alt}
        href={href}
        />
    </a>   
    )
}

function Photo({src="https://firebasestorage.googleapis.com/v0/b/receiptcoin-receiptchain-de560.appspot.com/o/website%2Fjpierce%2Fj-pierce-promo-black-01.png?alt=media&token=5cf0cf0f-31fa-4ef2-9f21-eaa13659567b", alt, width=470, height=292, mark=false,className, href="/"}) {
    
    const Comp = mark ? markLink : link;

    return (
        <Comp src={src} className={className} alt={alt} href={href}/>
    )
}

export default Photo