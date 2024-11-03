import CatsComponent from '../cats/CatsComponent'
import './home.css'
import arvore from '../../../public/Arvore.png'

function Home() {
  return (
    <div className='home'>
      <div className="art">
        <img className="tree" src={arvore} alt="Arvore" />
        <CatsComponent />
        <div className='content'>
          <div className="text">
            <h1>
              Boas-vindas!
            </h1>
            <label>
              Olá e seja muito bem-vindo(a) à minha página!  muito felizes em tê-lo(a) por aqui.

              Nosso objetivo é proporcionar uma experiência completa e única, trazendo tudo o que há de melhor para você. Explore cada seção, descubra nossos recursos e aproveite ao máximo o conteúdo que preparamos com cuidado.

              Sinta-se à vontade para navegar e, se precisar de ajuda, nossa equipe está sempre pronta para auxiliar. Esperamos que sua experiência seja incrível e que encontre exatamente o que procura!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
