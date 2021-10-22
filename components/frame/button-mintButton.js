import React from "react";


import styles from './button-mintButton.module.css'
import Button from '../button/button'
import TextTitle from '../text/text-title'


function MintButton ({ children }) {
    return (
    <Button  className={styles.mintButton} border>
        
            <TextTitle bold>{children}</TextTitle>
        
    </Button>
    )}

export default MintButton