import React from 'react'
import bannerMobile from '../../img/InitialBanner4Mobile1.jpg'
// import banner from '../../img/InitialBanner5.jpg'
import Banner from '../../img/Initial.jpg'
import styles from './InitialBanner.module.css'
const InitialBanner = () => {
  return (
    <div className={styles.initialBanner}>
        <img className={styles.initialBannerImage} src="https://github.com/nathanzd/data-insider/blob/main/src/img/Initial.jpg?raw=true" alt='banner'/>
        <img className={styles.initialBannerImageMobile} src={bannerMobile.src} alt='banner'/>

    </div>
  )
}

export default InitialBanner