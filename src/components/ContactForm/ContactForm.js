import React from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.ContactFormWrapper}>
        <div className={styles.ContactFormContent} >
            <h1 className={styles.ContactFormTitle}>Fale conosco</h1>
            <p className={styles.ContactFormText}>
Para entrar em contato conosco, basta preencher o formulário ao lado com as suas informações e a sua mensagem. Nossa equipe estará pronta para responder a todas as suas perguntas e fornecer informações detalhadas sobre nossos serviços de Business Intelligence.
<br/><br/>
Para que possamos ajudá-lo melhor, por favor, informe o máximo de detalhes possível sobre o motivo do seu contato. Isso nos ajudará a direcionar sua solicitação para o membro mais adequado da nossa equipe.</p>
        </div>
        <div>
        <form className={styles.ContactForm} action="https://api.staticforms.xyz/submit" method="post">
       
            <input className={styles.ContactInput} type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c"/> 
            <input className={styles.ContactInput} type="text" name="name" placeholder='Nome da sua empresa'/> 
            <input className={styles.ContactInput} type="text" name="email" placeholder='Email para contato'/> 
            <input className={styles.ContactInput} type="text" name="phone" placeholder='Telefone para contato'/> 
            <textarea className={styles.ContactTextArea} name="message" placeholder='Mensagem'></textarea> 
            
            
            <input type="hidden" name="redirectTo" value="https://example.com/contact/success"/> 
            <input className={styles.ContactFormSubmit} type="submit" value="Enviar" />
        </form>
        </div>
    </div>
  )
}

export default ContactForm