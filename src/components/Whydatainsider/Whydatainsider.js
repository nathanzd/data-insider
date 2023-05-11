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
                        <p className={styles.WhydatainsiderGridItemText}>Com o uso de ferramentas e técnicas de BI, a sua empresa pode obter insights mais precisos e confiáveis a partir de seus dados, o que ajuda a tomar decisões com embasamento e mais acertivas.</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <span class="material-symbols-outlined">
                            query_stats
                        </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Identificação de oportunidades de negócio</h1>
                        <p className={styles.WhydatainsiderGridItemText}>A implementação de um sistema de BI pode ajudar a identificar oportunidades de negócio que antes não eram visíveis, permitindo que a empresa crie estratégias para aproveitá-las.</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <span class="material-symbols-outlined">
                            groups
                        </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Melhor relacionamento com o cliente</h1>
                        <p className={styles.WhydatainsiderGridItemText}>Com o uso de BI, a empresa pode obter insights sobre as preferências e necessidades de seus clientes, permitindo que a empresa forneça produtos e serviços mais personalizados e relevantes.</p>
                    </div>
                </div>

                <div className={styles.WhydatainsiderGridItem}>
                    <div className={styles.WhydatainsiderGridItemIcon}>
                        <span class="material-symbols-outlined">
                            add_business
                        </span>
                    </div>
                    <div className={styles.WhydatainsiderGridItemContent}>
                        <h1 className={styles.WhydatainsiderGridItemTitle}>Maior eficiência operacional</h1>
                        <p className={styles.WhydatainsiderGridItemText}>A análise de dados pode ajudar a empresa a identificar processos ineficientes ou gargalos, permitindo que a empresa os melhore ou os elimine.</p>
                    </div>
                </div>

            </div>
            <div className={styles.TextAndImageButtonWrapper}>
                <button className={styles.TextAndImageButton}>Solicite uma demostração</button>
            </div>
        </div>
    </div>
  )
}

export default Whydatainsider