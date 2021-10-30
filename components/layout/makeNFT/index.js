import React from "react";

import styles from './style.module.css'
import Navigation from "../../navigation/navigation";
import HeadTitle from "../../text/head-title";

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
                    <div>
                        <HeadTitle size='30px' bold>Mint NFT</HeadTitle>
                    </div>
                    <div>
                        <HeadTitle>Fungible and non-fungible tokens</HeadTitle>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Layout