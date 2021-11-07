import React from "react";
import styles from './style.module.css'
import Navigation from "../../navigation/navigation";
import BusinessForm from '../../form/businessSignUp/index'
import Footer from '../../footer/index'

function Layout(){
    return(
        /* Layout Container */
        <div className={styles.container}>
            {/* Navigator */}
            <div className={styles.navigator}>
                <Navigation />
            </div>
            {/* Form */}
            <div className={styles.form}>
                <BusinessForm/>
            </div>
            {/* Footer */}
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )   
}

export default Layout