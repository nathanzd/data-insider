import React from 'react'
import styles from './ImplementationExplanationComponent.module.css'

const ImplementationExplanationComponent = () => {
  return (
    <div>
        <div className={styles.ImplementationExplanationComponentWrapper}>
            <div className={styles.ImplementationExplanationComponent}>
                <div style={{margin:'20px 20px'}}>
                    <div className={styles.ImplementationTitle}>
                        <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Conheça um pouco sobre a implementação do nosso sistema</h1>
                    </div>
                    <div className={styles.ImplementationSubtitle}>
                        <p>
                            Descrição de como funciona a implementação e funcionamento do sistema
                        </p>
                    </div>
                    <div className={styles.ImplementationTitle}>
                        <h1 style={{fontSize:'24px',fontWeight:'bold',color:'#009ADA',marginTop:'60px',marginBottom:'-25px'}}>Integrações disponiveis</h1>
                    </div>
                </div>
                <div className={styles.ImplementationIntegrations}>

                    <div className={styles.WhydatainsiderGrid}>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    database
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Bancos de dados relacionais</h1>
                                <p className={styles.WhydatainsiderGridItemText}>SQL Server, Oracle, MySQL, PostgreSQL, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    data_object
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Bancos de dados NoSQL</h1>
                                <p className={styles.WhydatainsiderGridItemText}>MongoDB, Cassandra, Cosmos DB, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    table
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Arquivos do Excel</h1>
                                <p className={styles.WhydatainsiderGridItemText}>XLSX, XLSM, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    backup
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Fontes de dados na nuvem </h1>
                                <p className={styles.WhydatainsiderGridItemText}>Azure Data Lake Storage, Azure Blob Storage, SharePoint Online, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    insights
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Serviços na nuvem</h1>
                                <p className={styles.WhydatainsiderGridItemText}>Salesforce, Google Analytics, Facebook Ads, Mailchimp, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    apartment
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Aplicativos de ERP</h1>
                                <p className={styles.WhydatainsiderGridItemText}>SAP, Oracle E-Business Suite, Dynamics 365, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    lan
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>APIs personalizadas</h1>
                                <p className={styles.WhydatainsiderGridItemText}>REST APIs, APIs do Microsoft Graph, entre outros</p>
                            </div>
                        </div>

                        <div className={styles.WhydatainsiderGridItem}>
                            <div className={styles.WhydatainsiderGridItemIcon}>
                                <span class="material-symbols-outlined">
                                    add
                                </span>
                            </div>
                            <div className={styles.WhydatainsiderGridItemContent}>
                                <h1 className={styles.WhydatainsiderGridItemTitle}>Caso sua empresa não faça uso de algum dos serviços mencionados</h1>
                                <p className={styles.WhydatainsiderGridItemText}> Na Data Insider, oferecemos, como parte de nossa consultoria em business intelligence,
                         a possibilidade de implementar um desses sistemas de acordo com as necessidades
                          específicas da sua organização.</p>
                            </div>
                        </div>
                        
                        
                    </div>
                   

                    


                    <div className={styles.TextAndImageButtonWrapper}>
                        <a href='/contato'><button className={styles.TextAndImageButton}>Solicite uma demostração</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImplementationExplanationComponent