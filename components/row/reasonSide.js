import React from "react";
import HeadTitle from "../text/head-title";
import styles from './reasonSide.module.css'

function ReasonSide() {

    return (
        <div className={styles.reasonContainer}>
            <div className={styles.reasonHeader}>
                <HeadTitle className={styles.reasonHeaderText} size='20px' bold>Reasons to NFT Everything with <span className={styles.Span}>Ownable-NS</span></HeadTitle>
                <hr/>
            </div>

            <div >
                <div>
                    left middle
                </div>
                <div>
                    Right middle
                </div>
            </div>
            <div>
                <p>FOOTER</p>
            </div>
        </div>

    )
}

export default ReasonSide