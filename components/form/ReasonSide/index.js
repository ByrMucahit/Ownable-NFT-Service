import React from "react";
import styles from './style.module.css'
import * as Icon from '../../icons'
import {INFO} from '../../../constant'
import TextTittle from '../../text/text-title'

function ReasonSideForm(){
    return (
        INFO.map((info) => {
            return(
                <div className={styles.reasonSideContainer}>
                    {/* Icon Side*/}
                    <Icon.CheckSquare/>
                    {/* Reason Side */}
                    <TextTittle className={styles.text}>{info.title}</TextTittle>
                </div>     
            )  
        })
    )
}

export default ReasonSideForm

