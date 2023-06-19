import logotipo from '../../img/logotipo.png'
import { useState } from 'react'
import styles from '@/components/headerPower/headerPower.module.css'
import Dependences from '../dependences/dependences'

const HeaderPower = () => {
  const [menu,setMenu]=useState(0)
 
  function TogglePowerHeaderMenu(){
    if(menu === 0){
      let headerMobileMenu = document.getElementById("headerPowerMobileMenuID")
      headerMobileMenu.style.display='flex'
      setMenu(1)
    }else{
      let headerMobileMenu = document.getElementById("headerPowerMobileMenuID")
      headerMobileMenu.style.display='none'
      setMenu(0)
    }
    

  }
 
  
  return (
    <header className={styles.headerPower}>
      <Dependences/>
      <div className={styles.headerPowerWrapper}>
        <div className={styles.headerLogoWrapper}>
          <a href='/'>{
            <img className={styles.headerLogo} src={logotipo.src} alt='logotipo'/>
          }</a>
        </div>
        <div onClick={TogglePowerHeaderMenu} className={styles.headerHamburgerIcon} id={styles.headerHamburgerIcon}>
        

          
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_11066)">
          <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_429_11066">
          <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
          </clipPath>
          </defs>
          </svg>
        </div>
        <div className={styles.headerMenuWrapper}>
          <ul className={styles.headerMenu}>
            <a href='/solutions'><li>Soluções</li></a>
            <a href='/quemsomos'><li>Quem Somos</li></a>
            <a href='/demonstration'><li>Demonstrações</li></a>
            <a href='/contato'><li>Contato</li></a>
          </ul>
        </div>
      </div>
      <div className={styles.headerPowerMobileMenu} id="headerPowerMobileMenuID">
        <ul className={styles.headerPowerMobileMenuItems} >
              <a href='/solutions'><li>Soluções</li></a>
              <a href='/quemsomos'><li>Quem Somos</li></a>
              <a href='/demonstration'><li>Demonstrações</li></a>
              <a href='/contato'><li>Contato</li></a>
        </ul>
      </div>
      <script>
        
        
      const query = window.matchMedia('prefers-color-scheme: dark');
      console.log(query)
      </script>
     </header>
  )
}

export default HeaderPower