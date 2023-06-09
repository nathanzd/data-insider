import styles from './TextAndImage.module.css'
let BlueSpanText={
    color:"#009ADA"
}

export const TextForTextAndImage=<div>
    <h1 style={{fontSize:'30px',fontWeight:'bold',color:'#303030'}}>Conheça a Data <span style={BlueSpanText}>INSIDER</span></h1>
        <p style={{margin:'10px 5px',color:'#303030'}}>
        A Data Insider é uma empresa de Business Intelligence que auxilia empresas a 
        aproveitarem ao máximo seus dados. Com soluções personalizadas e técnicas avançadas de 
        análise de dados, a nossa equipe de especialistas pode ajudar a sua empresa a 
        obter insights valiosos para melhorar os processos internos, identificar novas oportunidades 
        e tomar decisões baseadas em dados.
       
          </p>
          <div className={styles.TextAndImageButtonWrapper}>
          <a href='/contato'><button className={styles.TextAndImageButton}>Solicite uma demostração</button></a>
            </div>
</div>