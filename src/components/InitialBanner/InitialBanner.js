import React from 'react'
import banner from '../../img/InitialBanner.jpg'
import styles from './InitialBanner.module.css'
const InitialBanner = () => {
  return (
    <div className={styles.initialBanner}>
        <img className={styles.initialBannerImage} src={banner.src} alt='banner'/>

    </div>
  )
}

export default InitialBanner