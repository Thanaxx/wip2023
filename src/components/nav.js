import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../style/nav.css';
import {RxHamburgerMenu} from 'react-icons/rx';
import {MdOutlineClose} from 'react-icons/md';

function Nav() {

    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => {
        setSidebar(!sidebar)
    }

  return (
    <>
        <div className="nav-wrap">
            <div className="nav-flex">
                <div className='nav-logo'>
                    <img src="/images/code.png" alt="personal logo" />
                </div>
                <div className="nav-menu-btn">
                    <button onClick={showSideBar}><RxHamburgerMenu/></button>
                </div>
            </div>
        </div>

        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
             <ul className="nav-menu-items" onClick={showSideBar} >
                <li className="navbar-toggle">
                    <button><MdOutlineClose/></button>
                </li>

                <li className='nav-text'>
                    <Link>About</Link>
                </li>

                <li className='nav-text'>
                    <Link>Stacks</Link>
                </li>

                <li className='nav-text'>
                    <Link>Projects</Link>
                </li>

                <li className='nav-text'>
                    <Link>Contact</Link>
                </li>
                    
            </ul>
        </div>
    </>
  )
}

export default Nav