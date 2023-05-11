// Components
import HeaderPower from '../components/headerPower/headerPower'
import RodapePower from '../components/rodapePower/RodapePower'
import ContactForm from '../components/ContactForm/ContactForm'
import Dependences from '@/components/dependences/dependences'

export default function Contato() {
    return (
      <main >
        <Dependences/>
        <HeaderPower/>
        <div className='spacer' ></div>
        <div className='spacer' ></div>
        <ContactForm/>
        <RodapePower/>
    
      </main>
    )
  }
  