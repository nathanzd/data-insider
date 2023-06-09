import styles from './NumbersBanner.module.css'
import React from 'react'
const NumbersBanner = () => {
  return (
    <div>
        <div className={styles.NumbersBannerWrapper}>
        <h1 className={styles.NumberTitleTitle2}>Nosso impacto</h1>
            <div className={styles.NumbersBanner}>
                <div className={styles.NumbersBannerNumber}>
                    <h1 className={styles.NumberTitle}>+240</h1>
                    <p className={styles.NumbersText}>Mais de 240 empresas ja utilizam este sistema</p>
                </div>
                <div className={styles.NumbersBannerNumber}>
                    <h1 className={styles.NumberTitle}>+30%</h1>
                    <p className={styles.NumbersText}>Mais de 30% de aumento em eficiência</p>
                </div>
                <div className={styles.NumbersBannerNumber}>
                    <h1 className={styles.NumberTitle}>+4 Million</h1>
                    <p className={styles.NumbersText}>Mais de 4 milhões de dados processados</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NumbersBanner