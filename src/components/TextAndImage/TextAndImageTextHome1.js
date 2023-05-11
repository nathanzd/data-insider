import styles from './TextAndImage.module.css'
let BlueSpanText={
    color:"#009ADA"
}

export const TextForTextAndImage=<div>
    <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Ola Bem-vindo a Data <span style={BlueSpanText}>INSIDE</span></h1>
        <p style={{margin:'10px 5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis 
        neque sapien. Aliquam tincidunt, augue ut auctor lobortis, erat nisi bibendum 
        dui, eu accumsan enim libero a ex. Sed pharetra finibus consectetur. Etiam 
        consequat non ante vel sollicitudin. Nullam nec eleifend magna. Integer 
       
          </p>
          <div className={styles.TextAndImageButtonWrapper}>
                <button className={styles.TextAndImageButton}>Solicite uma demostração</button>
            </div>
</div>