import styles from './TextAndImage.module.css'
let BlueSpanText={
    color:"#009ADA"
}

export const TextForTextAndImage=<div>
    <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Conheça a Data <span style={BlueSpanText}>INSIDE</span></h1>
        <p style={{margin:'10px 5px'}}>
        A Data Insider é uma consultoria de Business Intelligence que ajuda empresas a 
        aproveitarem ao máximo seus dados. Com soluções personalizadas e técnicas avançadas de 
        análise de dados, a nossa equipe de especialistas pode ajudar a sua empresa a 
        obter insights valiosos para melhorar os processos internos, identificar oportunidades de 
        negócios e tomar decisões baseadas em dados.
       
          </p>
          <div className={styles.TextAndImageButtonWrapper}>
                <button className={styles.TextAndImageButton}>Solicite uma demostração</button>
            </div>
</div>