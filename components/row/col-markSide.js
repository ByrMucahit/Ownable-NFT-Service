import React from 'react'


import styles from './col-markSide.module.css'


function MarkSide({ children }) {
    return (
    <div className={styles.markSide}>{children}</div>
    )
}

export default  MarkSide;