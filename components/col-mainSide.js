import React from "react"
import cn from 'classnames'
import styles from './col-mainSide.module.css'

function MainSide({ children }){
    return (
        <div className={styles.mainSide}>{children}</div>
    )
}

export default MainSide;