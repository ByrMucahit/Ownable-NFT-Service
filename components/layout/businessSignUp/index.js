import React from "react";
import styles from './style.module.css'
import Navigation from "../../navigation/navigation";

function Layout({ children }){
    return(
        /* Layout Container */
        <div className={styles.container}>
            {/* Navigator */}
            <div className={styles.navigator}>
                <Navigation />
            </div>

        </div>
    )   
}

export default Layout