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
            <div className={styles.navigator}>
                <Navigation />
            </div>
            {/* Center Container */}
            <div className={styles.formContainer}>
                {/* Header inside Container */}
                <div className={styles.headerSide}>
                    <div className={styles.headers}>
                        <HeadTitle className={styles.header}  bold>Mint NFT</HeadTitle>
                    </div>
                    <div className={styles.marks}>
                        <HeadTitle className={styles.mark}>Fungible and non-fungible tokens</HeadTitle>
                    </div>
                </div>
                <div className={styles.form}>
                    <MakeNFTForm/>
                </div>
            </div>
            {/* Container */}
            <div className={styles.Footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout