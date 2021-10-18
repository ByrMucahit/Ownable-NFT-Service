import React from "react"

import styles from './col-loginSide.module.css'


function LoginSide({children}){
    return (
        <div className={styles.loginSide}>{children}</div>
    )
}

export default LoginSide;