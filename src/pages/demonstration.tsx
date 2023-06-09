import TextAndImage from "@/components/TextAndImage/TextAndImage"
import HeaderPower from "@/components/headerPower/headerPower"
import RodapePower from "@/components/rodapePower/RodapePower"
import { TextForTextAndImage } from '../components/TextAndImage/TextAndImageTextDemostracoes'
import banner from '../img/3556960.png'

export default function Demonstration() {
    return (
      <main >
        <HeaderPower/>

        <div className='spacer' ></div>
        <TextAndImage text={TextForTextAndImage} image={banner.src}/>
      
        <div className="relatorio">
          <div className="demonstrationResume" style={{gap:'20px'}}>
            <h1 style={{fontSize:'30px',fontWeight:'bold',color:"#303030;"}}>Concessionária</h1>
            <p style={{color:"#303030;"}}>
              Desenvolvemos este painel de controle com
               a finalidade específica de proporcionar uma experiência aprimorada na
                visualização dos relatórios de vendas e uma ampla gama de informações
                 operacionais vitais para uma concessionária de veículos. Nosso compromisso
                  em oferecer uma solução eficaz resultou em um painel que atende às demandas
                   e desafios únicos enfrentados pelo setor automotivo.
            </p>
          </div>
          <iframe  title="Report Section"  height="573.5" src="https://app.powerbi.com/view?r=eyJrIjoiZWUyMjQ2MzYtNDg4MC00OThiLTkwMDItYjlhMGZjYjk4N2Q5IiwidCI6ImI5ZGY4YjEzLTE2NjgtNDlkYS04NDA4LTc1NzVlMjQ2MDIwNCJ9" frameBorder={0} allowFullScreen={true}></iframe>
        
        </div>
        <div  className="relatorioInvertido">
          <div className="demonstrationResume" style={{gap:'20px'}}>
            <h1 style={{fontSize:'30px',fontWeight:'bold',color:"#303030;"}}>Rede de estabelecimentos</h1>
            <p style={{color:"#303030;"}}>
            O objetivo central deste painel é fornecer uma visão abrangente e simplificada
             das operações comerciais da empresa, permitindo uma análise detalhada e eficiente
              do desempenho em todos os seus estabelecimentos. Com a ajuda deste painel, é possível
               acessar facilmente informações atualizadas e relevantes sobre vendas por período,
                categorias de produtos mais vendidos, identificação de estabelecimentos com melhor
                 desempenho e muito mais.


            </p>
          </div>
          <iframe title="Report Section"  height="473.5" src="https://app.powerbi.com/view?r=eyJrIjoiYWQzOWIyZTItY2Y2MS00OTAzLWE1ZDAtNWZlMDYyMzZlNzJiIiwidCI6ImI5ZGY4YjEzLTE2NjgtNDlkYS04NDA4LTc1NzVlMjQ2MDIwNCJ9" frameBorder={0} allowFullScreen={true}></iframe>
        </div>
        <div className="TextAndImageButtonWrapper">
          <a href='/contato'><button className="TextAndImageButton">Solicite uma demostração</button></a>
        </div>
        <RodapePower/>
      </main>
    )
  }
  