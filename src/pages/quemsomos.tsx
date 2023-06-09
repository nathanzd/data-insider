import TextAndImage from '@/components/TextAndImage/TextAndImage'
import CustomBanner from '../components/CustomBanner/CustomBanner'
import DesktopBanner from '../img/BannerQuemSomos.jpg'
import MobileBanner from '../img/BannerQuemSomosMobile.jpg'
import HeaderPower from '@/components/headerPower/headerPower'
import RodapePower from '@/components/rodapePower/RodapePower'
import { TextForTextAndImage } from '../components/TextAndImage/TextAndImageTextQuemsomos1'
export default function Quemsomos() {
    return (
      <main >
        <HeaderPower/>
        <div className='spacer' ></div>
        <CustomBanner desktop={DesktopBanner} mobile={MobileBanner}/>
        <div className='spacer' ></div>
        <TextAndImage text={TextForTextAndImage} image={null}/>
        <RodapePower/>
    
      </main>
    )
  }
  