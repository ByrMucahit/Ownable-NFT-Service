import React from "react";
import styles from './style.module.css'
import * as Icon from '../../icons'

import HeadTitle from '../../text/head-title'

const INFO = [
    {
        title: 'Claim Ownership',
        mark: true
    },
    {
        title: 'Prove Exitence',
        mark: true
    },
    {
        title: 'Verify Authenticity',
        mark: true
    },
    {
        title: 'Privately Connect with the Owner',
        mark: true
    },
    {
        title: 'Secure Digital Assets',
        mark: true
    }
]

function ReasonSideForm(){
    return (
        INFO.map((info) => {
            return(
                <div className={styles.reasonSideContainer}>
                    {/* Icon Side*/}
                    <Icon.CheckSquare/>
                    {/* Reason Side */}
                    <HeadTitle size='18px' opacity='0.8'>{info.title}</HeadTitle>
                </div>
               
            )
            
        })
    )
}

export default ReasonSideForm

