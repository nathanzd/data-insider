import React from 'react'
import styles from './GridListSolutions.module.css'

const GridListSolutions = () => {
  return (
    <div>
        <div className={styles.GridListSolutionsWrapper}>
            <div className={styles.GridListSolutions}>

                <div className={styles.GridListSolutionsItem}>
                    <div className={styles.GridListSolutionsItemTitle}>
                        <h2>Coleta de dados</h2>
                    </div>
                    <div className={styles.GridListSolutionsItemList}>
                        <ul>
                            <li>Extração de dados</li>
                            <li>Conversão de dados</li>
                            <li>Integração de dados</li>
                            <li>Padronização de dados</li>
                            <li>Validação de dados</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.GridListSolutionsItem}>
                    <div className={styles.GridListSolutionsItemTitle}>
                        <h2>Visualização de dados</h2>
                    </div>
                    <div className={styles.GridListSolutionsItemList}>
                        <ul>
                            <li>Criação de painéis interativos</li>
                            <li>Gráficos e visualizações personalizadas</li>
                            <li>Visualização de séries temporais</li>
                            <li>Visualização em tempo real</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.GridListSolutionsItem}>
                    <div className={styles.GridListSolutionsItemTitle}>
                        <h2>Business Intelligence</h2>
                    </div>
                    <div className={styles.GridListSolutionsItemList}>
                        <ul>
                            <li>Modelagem de dados</li>
                            <li>Relatórios e painéis</li>
                            <li>Análises preditivas</li>
                            <li>Automação de processos</li>
                            <li>Compartilhamento de dados</li>
                        </ul>
                    </div>
                </div>

                

            </div>
        </div>
    </div>
  )
}

export default GridListSolutions