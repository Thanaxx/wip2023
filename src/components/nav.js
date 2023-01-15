import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../style/nav.css';
import {RxHamburgerMenu} from 'react-icons/rx';
import {MdOutlineClose} from 'react-icons/md';

function nav() {

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
                <div>
                    <div className="nav-menu">
                        <button onClick={showSideBar}><RxHamburgerMenu/></button>
                    </div>
                </div>
            </div>

            <div className={sidebar ? 'nav-links active' : 'nav-links'}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle">
                        <button><MdOutlineClose/></button>
                    </li>

                    <li>
                        <Link>About</Link>
                    </li>

                    <li>
                        <Link>Stacks</Link>
                    </li>

                    <li>
                        <Link>Projects</Link>
                    </li>

                    <li>
                        <Link>Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </>
  )
}

export default nav