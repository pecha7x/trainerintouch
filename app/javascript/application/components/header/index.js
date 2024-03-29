import { html } from 'htm/react';
import { useState, useEffect, useRef } from 'react';
import navList from './NavList';
import mobileMenu from './MobileMenu';

function Header() {
  const [mobileMenuButtonClass, setMobileMenuButtonClass] = useState(null);
  const [mobileMenuDisplayClass, setMobileMenuDisplayClass] = useState('hidden');
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      closeMobileMenu();
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const logout = (e) => {
    e.preventDefault()
    console.log('send logout request to devise')
  };

  const navToggle = () => {
    if (mobileMenuButtonClass) {
      closeMobileMenu()
    } else {
      setMobileMenuButtonClass('open')
      setMobileMenuDisplayClass('flex')
    }
  }

  const closeMobileMenu = () => {
    setMobileMenuButtonClass('')
    setMobileMenuDisplayClass('hidden')
  }

  return html`
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src="images/logo.svg" alt="" />
          <div className="nav-list hidden space-x-8 font-bold lg:flex">
            <${navList} linkClassName="text-gray-300 hover:text-gray-700"/>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-gray-300 lg:flex">
          <a href="#" onClick=${(e) => logout(e)} className="hover:text-gray-700">Logout</div>
        </div>
        <button ref=${ref} onClick=${(e) => navToggle(e)} className=${mobileMenuButtonClass+" block hamburger lg:hidden focus:outline-none"} type="button">
          <span className="hamburger-top"/>
          <span className="hamburger-middle"/>
          <span className="hamburger-bottom"/>
        </button>
      </div>
      <${mobileMenu}
        displayClass=${mobileMenuDisplayClass}
        logout=${logout}
        close=${closeMobileMenu}
      />
    </nav>
  `;
};

export default Header;
