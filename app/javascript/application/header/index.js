import { html } from 'htm/react';
import { useState } from 'react';
import navList from './NavList';
import mobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuButtonClass, setMobileMenuButtonClass] = useState(null);
  const [mobileMenuDisplayClass, setMobileMenuDisplayClass] = useState('hidden');

  const logout = (e) => {
    e.preventDefault()
    console.log('send logout request to devise')
  };

  const navToggle = () => {
    if (mobileMenuButtonClass) {
      closeMobileMenu()
    } else {
      setMobileMenuButtonClass('open')
      setMobileMenuDisplayClass('flext')
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
          <div className="hidden space-x-8 font-bold lg:flex">
            <${navList} linkClassName="text-grayishViolet hover:text-veryDarkViolet"/>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <a href="#" onClick=${(e) => logout(e)} className="hover:text-veryDarkViolet">Logout</div>
        </div>
        <button onClick=${(e) => navToggle(e)} className=${mobileMenuButtonClass+" block hamburger lg:hidden focus:outline-none"} type="button">
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
