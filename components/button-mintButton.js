import React from "react";
import styles from './button-mintButton.module.css'


import Button from './button'
import TextTitle from './text-title'


function MintButton ({ children }) {
    return (
    <Button className={styles.sss} border>
        <TextTitle bold>
            {children}
        </TextTitle>
    </Button>
    )}

export default MintButton