import React from "react";
import styles from './style.module.css'
import * as Icon from '../../icons'

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
                <div style={{display: 'flex'}}>
                    <Icon.CheckSquare/>

                    <p>{info.title}</p>
                </div>
               
            )
            
        })
    )
}

export default ReasonSideForm

