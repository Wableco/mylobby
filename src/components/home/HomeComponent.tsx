import CatsComponent from '../cats/CatsComponent'
import './home.css'
import arvore from '../../../public/Arvore.png'

function Home() {
  return (
    <div className='home'>
      <div className="art">
        <img className="tree" src={arvore} alt="Arvore" />
        <CatsComponent />
      </div>
    </div>
  )
}

export default Home
