import React from "react";
import styles from './style.module.css'
import * as Icon from '../../icons'
import {INFO} from '../../../constant'
import HeadTitle from '../../text/head-title'

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

