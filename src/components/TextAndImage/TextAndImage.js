import React from 'react'
import styles from './TextAndImage.module.css'

const TextAndImage = ({text,image}) => {
    
  return (
    <div className={styles.TextAndImageWrapper}>
        <div className={styles.TextAndImage}>
            <div className={styles.TextAndImageTextWrapper}>
                <div className={styles.TextAndImageText}>
                    {text}
                </div>
            </div>
            <div className={styles.TextAndImageImageWrapper}>
                <img className={styles.TextAndImageImage} src={image}  alt=''/>
            </div>
           
        </div>
    </div>
  )
}

export default TextAndImage