import React from "react";
import cn from 'classnames'

import styles from './button-mintButton.module.css'
import Button from '../button/button'
import TextTitle from '../text/text-title'


function MintButton ({ children, className}) {
    return (
    <Button  className={cn(styles.mintButton, className)} border>
            <TextTitle bold>{children}</TextTitle>
    </Button>
    )}

export default MintButton