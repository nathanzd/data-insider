import React from 'react'
import styles from './ImplementationExplanationComponent.module.css'

const ImplementationExplanationComponent = () => {
  return (
    <div>
        <div className={styles.ImplementationExplanationComponentWrapper}>
            <div className={styles.ImplementationExplanationComponent}>
                <div style={{margin:'20px 20px'}}>
                    <div className={styles.ImplementationTitle}>
                        <h1 style={{fontSize:'30px',fontWeight:'bold',color:'#303030'}}>Implementação do sistema</h1>
                    </div>
                    <div className={styles.ImplementationSubtitle}>
                        <p style={{color:'#303030'}}>
                        Ao compreender as necessidades específicas da empresa, procedemos com a implementação do sistema de acordo com os seguintes processos
                       <br/><br/>

                        <b>Extração e integração de dados:</b> Uma vez que os requisitos são estabelecidos, o próximo passo é extrair dados de
                         várias fontes de dados internas e externas à organização, como bancos de dados operacionais, planilhas, arquivos CSV,
                         sistemas de CRM, ERP, entre outros
                         <br/><br/>
                        <b>Transformação e limpeza de dados:</b>
                        Os dados extraídos podem estar em formatos diferentes e não estruturados. Nesta etapa, os dados são transformados e limpos para garantir a consistência, qualidade e padronização.
                        <br/><br/>
                        <b>Modelagem e design:</b>
                        Nesta etapa, é criado um modelo de dados que representa as relações entre os diferentes elementos de informação. Isso pode envolver a criação de tabelas, dimensões,
                         hierarquias e relacionamentos para facilitar análises eficientes. 
                        <br/><br/>

                        <b>Análise e visualização:</b> Permitir que os usuários explorem e analisem os dados usando ferramentas de consulta e visualização.
                        <br/><br/>
                        <b>Distribuição e acesso:</b>
                        A última etapa envolve disponibilizar as informações para os usuários finais de forma acessível. Isso pode ser feito por meio de painéis interativos online, relatórios automatizados enviados por e-mail ou acesso direto ao sistema de BI
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
                                <p className={styles.WhydatainsiderGridItemText}> Na Data Hash, oferecemos, como parte de nossa consultoria em business intelligence,
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