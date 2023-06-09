import TextAndImage from "@/components/TextAndImage/TextAndImage"
import { TextForTextAndImage } from "@/components/TextAndImage/TextAndImageTextSolutions"
import HeaderPower from "@/components/headerPower/headerPower"
import RodapePower from "@/components/rodapePower/RodapePower"
import IlustrationImage from "@/img/ilustrationtforsolutions.png"
import GridListSolutions from '../components/GridListSolutions/GridListSolutions'
import ImplementationExplanationComponent from '../components/ImplementationExplanationComponent/ImplementationExplanationComponent'

export default function Solutions() {
    return (
      <main >
        <HeaderPower/>
       <div className='spacer' ></div>
       
      <TextAndImage text={TextForTextAndImage} image={IlustrationImage.src}/>
      <div style={{padding:'0px 2%'}}>
        <GridListSolutions/>
        <ImplementationExplanationComponent/>
      </div>
      
      <RodapePower/>
      </main>
    )
  }
  