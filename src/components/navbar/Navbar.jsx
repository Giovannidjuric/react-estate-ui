import { useEffect, useState } from 'react';
import './Navbar.scss';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    console.log('openNav --> ', open);
    
  }, [open])

  return (
    <nav>
        <div className="left">
          <a className="logo" href="">
            <img  src="/logo.png" alt="" />
            <span>Gio-Estate</span>
          </a>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
        </div>
        <div className="right">
          <a href="./">Sign in</a>
          <a className='register' href="./">Sign up</a>
          <div className="menuIcon" onClick={() => setOpen ((prev) => !prev)}>
            <img src="/menu.png" alt="" />
          </div>
          <div className={open ? 'menu active' : 'menu'}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar