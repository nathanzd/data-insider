import styles from './TextAndImage.module.css'
let BlueSpanText={
    color:"#009ADA"
}

export const TextForTextAndImage=<div>
    <h1 style={{fontSize:'30px',fontWeight:'bold',color:'#303030'}}>Conheça nossa <span style={BlueSpanText}>história</span></h1>
        <p style={{margin:'10px 5px',color:'#303030'}}>
        A Data Hash foi estabelecida em 2023 com a finalidade de empregar 
        tecnologia avançada e <b>análise de dados</b> para oferecer <b>praticidade e confiabilidade </b>
          a empresas de diversos setores. Fundada por analistas com vasta experiência e apoiada
          por uma equipe especializada nas mais recentes tecnologias do mercado, buscamos fornecer
           relatórios e insights de alta precisão, além da implementação de sistemas de análise de
            última geração. Nosso compromisso é oferecer soluções de ponta, garantindo qualidade e 
            excelência em cada aspecto.
       
          </p>
          <div className={styles.TextAndImageButtonWrapper}>
          <a href='/contato'><button className={styles.TextAndImageButton}>Saiba mais</button></a>
            </div>
</div>