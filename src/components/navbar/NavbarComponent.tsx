import { Navigate } from 'react-router-dom'
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
            <>
              <ul className={isMenu ? "visible" : "hidden"}>
                <li onClick={() => (<Navigate to='/home' />)}>Home</li>
                <li onClick={() => (<Navigate to='/about' />)}>About</li>
                <li onClick={() => (<Navigate to='/contact' />)}>Contact</li>
                <li onClick={() => (<Navigate to='/cats' />)}>Cats</li>
              </ul>
              <label>Login</label>
            </>
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
