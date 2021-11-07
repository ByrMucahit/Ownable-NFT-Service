import React from "react";
import styles from './style.module.css'

import Button from '../base/index'
import { Media } from '../../icons'
import HeadTitle from "../../text/head-title";

function ImageButton({children, url}){
    return(
        /* Container of button, which has image before of text */
        <div className={styles.imageContainer}>
            {/* Button */}
            <Button className={styles.imageButton} border>
                {/* Media Icon */}
                <Media className={styles.imageImage} />
                {/* Media Text */}
                <HeadTitle className={styles.imageButtonText} bold>{children}</HeadTitle>
            </Button>
        </div>
        
    )
}

export default ImageButton