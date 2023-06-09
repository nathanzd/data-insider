import React from 'react'
import styles from '../InitialBanner/InitialBanner.module.css'

const CustomBanner = ({mobile,desktop}) => {
    return (
        <div className={styles.initialBanner}>
            <img className={styles.initialBannerImage} src={desktop.src} alt='banner'/>
            <img className={styles.initialBannerImageMobile} src={mobile.src} alt='banner'/>
    
        </div>
      )
}

export default CustomBanner