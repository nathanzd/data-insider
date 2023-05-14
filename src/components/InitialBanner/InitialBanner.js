import React from 'react'
import banner from '../../img/InitialBanner5.jpg'
import bannerMobile from '../../img/InitialBanner4Mobile1.jpg'
import styles from './InitialBanner.module.css'
const InitialBanner = () => {
  return (
    <div className={styles.initialBanner}>
        <img className={styles.initialBannerImage} src={banner.src} alt='banner'/>
        <img className={styles.initialBannerImageMobile} src={bannerMobile.src} alt='banner'/>

    </div>
  )
}

export default InitialBanner