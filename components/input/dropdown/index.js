import React from "react";
import styles from './style.module.css'
import HeadTitle from '../../text/head-title'
import cn from 'classnames'
import {makeNFTOption, BUSINESS} from '../../../constant'
function DropDownMenu({business=false, header, big,medium,small}){

    const comp = business ? BUSINESS : makeNFTOption
    return (  
        /* Dropdown menu container */
        <label for='subOptions'> <HeadTitle className={styles.header}>{header}</HeadTitle><br/>
            {/* Selection */}
            <select id='subOptions' name='options' className={cn([styles.options,medium && styles.medium])}>
                {/* Options */}
                {comp.map((options)=>{
                    return(
                    <option value={options.key} className={styles.option}>{options.title}</option>
                    )
                })}
            </select>
        </label>
    )
}


export default DropDownMenu