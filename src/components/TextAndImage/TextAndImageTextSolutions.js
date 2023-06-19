import styles from './TextAndImage.module.css'
let BlueSpanText={
    color:"#009ADA"
}

export const TextForTextAndImage=<div>
    <h1 style={{fontSize:'30px',fontWeight:'bold',color:'#303030'}}>Conheça nossas <span style={BlueSpanText}>soluções</span></h1>
        <p style={{margin:'10px 5px',color:'#303030'}}>
        Oferecemos soluções
        abrangentes de Business Intelligence e Data Intelligence, capacitando sua empresa a tomar decisões
        estratégicas baseadas em dados.<br/><br/> Desde análises avançadas até visualizações intuitivas,
        estamos aqui para fornecer soluções personalizadas que impulsionam seu sucesso. Veja
        o potencial oculto dos seus dados e leve sua empresa ao próximo patamar
         com a Data Hash!
       
          </p>
          <div className={styles.TextAndImageButtonWrapper}>
          <a href='/contato'><button className={styles.TextAndImageButton}>Solicite uma demostração</button></a>
            </div>
</div>