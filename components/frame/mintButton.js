import React from "react";
import cn from 'classnames'

import styles from './mintButton.module.css'
import Button from '../button/base/index'
import TextTitle from '../text/text-title'


function MintButton ({ children, className, href}) {
    return (
    <a  className={styles.cssMint} border href={href}>
            {children}
    </a>
    )}

export default MintButton