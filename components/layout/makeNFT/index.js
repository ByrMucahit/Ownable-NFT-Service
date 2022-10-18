import React from "react";

import styles from './style.module.css'
import Navigation from "../../navigation/navigation";
import MakeNFTForm from "../../form/makeNFT/NonAccount";
import Footer from '../../footer/index'

function Layout() {
    return (
        /* Layout in Make NFT Page */
        <div className={styles.layout}>
            {/* Navigator */}
            <Navigation/>
            {/* Center Container */}
            <div>

                <MakeNFTForm/>

            </div>
            {/* Container */}
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout