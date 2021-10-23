import React from "react"

import styles from './col-mainSide.module.css'

function MainSide({ children }){
    return (
        <div className={styles.mainSide}>{children}</div>
    )
}

export default MainSide;