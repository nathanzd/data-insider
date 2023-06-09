// Components
import HeaderPower from '../components/headerPower/headerPower'
import Dependences from '../components/dependences/dependences'
import InitialBanner from '../components/InitialBanner/InitialBanner'
import TextAndImage from '../components/TextAndImage/TextAndImage'
import NumbersBanner from '../components/numbersBanner/NumbersBanner'
import Whydatainsider from '../components/Whydatainsider/Whydatainsider'
import RodapePower from '../components/rodapePower/RodapePower'

// Content
import ImageForTextAndImage from '../img/ImageForTextAndImage.png'
import {TextForTextAndImage} from '../components/TextAndImage/TextAndImageTextHome1'

export default function Home() {
  return (
    <main >
      <Dependences/>
      <HeaderPower/>
      <div className='spacer' ></div>
      <InitialBanner/>
      <TextAndImage text={TextForTextAndImage} image={ImageForTextAndImage.src} />
      <NumbersBanner/>
      <Whydatainsider/>
      <RodapePower/>
      
    </main>
  )
}
