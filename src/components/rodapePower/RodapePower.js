import React from 'react'
import styles from './RodapePower.module.css'
import logotipo from '../../img/logotipo.png'

const RodapePower = () => {
  return (
    <div>
        <div className={styles.RodapePowerWrapper}>
            <div className={styles.RodapePowerMenu}>
                <div className={styles.RodapePower}>
                    <div className={styles.RodapePowerMenuPrincipal}>
                        
                        <h1 className={styles.RodapePowerTitle}>Empresa</h1>
                        <ul className={styles.RodapePowerMenuPrincipalLista}>
                            <a href='/solutions'><li>Soluções</li></a>
                            <a href='/quemsomos'><li>Quem Somos</li></a>
                            <a href='/demonstration'><li>Demonstrações</li></a>
                            <a href='/contato'><li>Contato</li></a>
                        </ul>
                    </div>

                    <div className={styles.RodapePowerMenuPrincipal}>
                        
                        <h1 className={styles.RodapePowerTitle}>Soluções</h1>
                        <ul className={styles.RodapePowerMenuPrincipalLista}>
                            <a href='/solutions#solutions'><li>Coleta de dados</li></a>
                            <a href='/solutions#solutions'><li>Visualização de dados</li></a>
                            <a href='/solutions#solutions'><li>Business intelligence</li></a>

                        </ul>
                    </div>
                </div>
                <div className={styles.RodapePowerMenuPrincipal}>
                        
                        <p style={{color:'white',fontSize:'14px',marginTop:'15px'}}>
                           Whatsapp: (11) 99166-6153<br/>
                           Email: contato@datahash.com.br<br/>
                            
                        </p>
                    </div>

                
                
            </div>

            <div className={styles.RodapePowerRedes}>
                    <div>
                        <svg fill="#ffffff" width="45px" height="45px" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>linkedin</title>
                        <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"></path>
                        </svg>
                    </div>
                    <div>
                    <svg width="45px" height="45px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M15 3.784a5.63 5.63 0 0 1-.65.803 6.058 6.058 0 0 1-.786.68 5.442 5.442 0 0 1 .014.377c0 .574-.061 1.141-.184 1.702a8.467 8.467 0 0 1-.534 1.627 8.444 8.444 0 0 1-1.264 2.04 7.768 7.768 0 0 1-1.72 1.521 7.835 7.835 0 0 1-2.095.95 8.524 8.524 0 0 1-2.379.329 8.178 8.178 0 0 1-2.293-.325A7.921 7.921 0 0 1 1 12.52a5.762 5.762 0 0 0 4.252-1.19 2.842 2.842 0 0 1-2.273-1.19 2.878 2.878 0 0 1-.407-.8c.091.014.181.026.27.035a2.797 2.797 0 0 0 1.022-.089 2.808 2.808 0 0 1-.926-.362 2.942 2.942 0 0 1-.728-.633 2.839 2.839 0 0 1-.65-1.822v-.033c.402.227.837.348 1.306.362a2.943 2.943 0 0 1-.936-1.04 2.955 2.955 0 0 1-.253-.649 2.945 2.945 0 0 1 .007-1.453c.063-.243.161-.474.294-.693.364.451.77.856 1.216 1.213a8.215 8.215 0 0 0 3.008 1.525 7.965 7.965 0 0 0 1.695.263 2.15 2.15 0 0 1-.058-.325 3.265 3.265 0 0 1-.017-.331c0-.397.075-.77.226-1.118a2.892 2.892 0 0 1 1.528-1.528 2.79 2.79 0 0 1 1.117-.225 2.846 2.846 0 0 1 2.099.909 5.7 5.7 0 0 0 1.818-.698 2.815 2.815 0 0 1-1.258 1.586A5.704 5.704 0 0 0 15 3.785z"/></svg>
                    </div>
            </div>
            
        </div>
        <div className={styles.RodapePowerMenuInstitucional} >
                <p>Todos os direitos reservados Data Hash Ltda 2023®</p>
                <ul>
                    <li>Politicas de privacidade</li>
                    
                </ul>
            </div>
    </div>
  )
}

export default RodapePower