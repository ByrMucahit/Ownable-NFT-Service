import React from "react";

import styles from './style.module.css'
import Navigation from "../../navigation/navigation";
import HeadTitle from "../../text/head-title";
import MakeNFTForm from "../../form/makeNFT/NonAccount";
import Footer from '../../footer/index'

function Layout(){
    return(
        /* Layout in Make NFT Page */
        <div className={styles.layout}>
            {/* Navigator */}
                <Navigation />
            {/* Center Container */}
            <div className={styles.formContainer}>
              
           
            <MakeNFTForm/>
              
            </div>
            {/* Container */}
            <div className={styles.Footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout