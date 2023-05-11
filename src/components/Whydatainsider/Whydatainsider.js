import React from 'react'
import styles from './Whydatainsider.module.css'
const Whydatainsider = () => {
  return (
    <div className={styles.WhydatainsiderWrapper}>
        <div className={styles.Whydatainsider}>
            <div className={styles.WhydatainsiderTextWrapper}>
                <h1 className={styles.WhydatainsiderText}>Vantagens de uma operação com business intelligence</h1>
            </div>
            <div className={styles.WhydatainsiderGrid}>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <span class="material-symbols-outlined">
                            ads_click
                        </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Mais acertividade na tomada de decisão</h1>
                        <p className={styles.WhydatainsiderGridItemText}>Com todas as informações da sua operação a sua disposição fica bem mais facil liderar</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <span class="material-symbols-outlined">
                            insights
                        </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Facil acesso a informação</h1>
                        <p className={styles.WhydatainsiderGridItemText}>Com dashboards dedicados para cada setor, o acesso a informação fica rapido e simples</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                    <span class="material-symbols-outlined">
                        attach_money
                    </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Facilite o controle financeiro</h1>
                        <p className={styles.WhydatainsiderGridItemText}>Nosso sistema proporciona mais precisão na entrega dos dados, assim evitando possiveis erros humanos</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <span class="material-symbols-outlined">
                            add_business
                        </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Cresça com consistencia</h1>
                        <p className={styles.WhydatainsiderGridItemText}>Nosso sistema se expande de acordo com o seu negocio, gerando uma gestão altamente escalavel</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Whydatainsider