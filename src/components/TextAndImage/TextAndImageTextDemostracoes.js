import styles from './TextAndImage.module.css'
let BlueSpanText={
    color:"#009ADA"
}
// <a href='/contato'><button className={styles.TextAndImageButton}>Saiba mais</button></a>
export const TextForTextAndImage=<div>
    <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Conheça alguns <span style={BlueSpanText}>indicadores</span></h1>
        <p style={{margin:'10px 5px'}}>
        Venha conhecer de forma prática o funcionamento dos nossos dashboards
         e como eles aprimoram a visualização e gestão do seu negócio. Todas essas demonstrações
          de painéis são apenas exemplos para referência. O painel de controle será desenvolvido
           exclusivamente para a sua empresa e contará com funcionalidades específicas de acordo 
           com as suas necessidades.<br/><br/> Além disso, acreditamos que a acessibilidade é fundamental.
            Recomendamos que você acesse este dashboard por meio de um computador,
             pois isso garantirá uma experiência visual otimizada e permitirá que você explore
              todos os recursos e detalhes com clareza e precisão.
       
          </p>
          <div className={styles.TextAndImageButtonWrapper}>
         
            </div>
</div>