import React from "react";
import styles from './style.module.css'
import Navigation from "../../navigation/navigation";
import BusinessForm from '../../form/businessSignUp/index'
import Footer from '../../footer/index'
import Button from "../../button/base/index";
import HeadTitle from "../../text/head-title";

function Layout({ children }){
    return(
        /* Layout Container */
        <div className={styles.container}>
            <div>
                <div>

            {/* Navigator */}
            <div className={styles.navigator}>
                <Navigation />
            </div>
            <div className={styles.form}>
                <BusinessForm/>
            </div>
            
            <div className={styles.footer}>
                <Footer />
            </div>
            </div>
            </div>
        </div>
    )   
}

export default Layout