import { useNavigate } from 'react-router-dom'
import './navbar.css'
import logo from '../../../public/Botão Home.png'
import { useState } from 'react'

const NavbarComponent = () => {

  const [isMenu, setIsMenu] = useState(false)

  const toggleMenu = () => {
    setIsMenu(!isMenu)
    setAnimating(true)
    setReverse((prev) => !prev)
  }

  const navigate = useNavigate()

  const gotohome = () => {
    navigate('/home')
  }

  const gotoAbout = () => {
    navigate('/about')
  }

  const gotoContact = () => {
    navigate('/contact')
  }

  const gotoCats = () => {
    navigate('/cats')
  }


  const [animating, setAnimating] = useState(false)
  const [reverse, setReverse] = useState(false)

  return (
    <>
      {isMenu ?
        <div className='NavBar'>
          <img
            src={logo}
            className={animating ? (reverse ? "reverse" : "animate") : ""}
            onAnimationEnd={() => setAnimating(false)}
            onClick={toggleMenu}
            alt="logo"
          />
          {isMenu ?
            <div className='MenuControl'>
              <div className='Menu'>
                <button onClick={gotohome}>Home</button>
                <button onClick={gotoAbout}>About</button>
                <button onClick={gotoContact}>Contact</button>
                <button onClick={gotoCats}>Cats</button>
                <label>Login</label>
              </div>
            </div>
            : null
          }
        </div> :
        <div className='NavBar'>
          <img
            src={logo}
            className={animating ? (reverse ? "reverse" : "animate") : "Logocats"}
            onAnimationEnd={() => setAnimating(false)}
            onClick={toggleMenu}
            alt="logo"
          />
        </div>
      }
    </>
  )
}

export default NavbarComponent
