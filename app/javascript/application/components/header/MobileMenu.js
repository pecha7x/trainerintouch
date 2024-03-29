import { html } from 'htm/react';
import navList from './NavList';

function MobileMenu({displayClass, logout, close}) {
  return html`
    <div className="${displayClass} absolute p-6 rounded-lg bg-gray-500 left-6 right-6 top-20 z-100">
      <div onClick=${() => close()} className="nav-list flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
        <${navList} linkClassName="w-full text-center"/>
        <a href="#" onClick=${(e) => logout(e)} className="w-full text-center pt-6 border-t border-gray-400 text-center">Logout</div>
      </div>
    </div>
  `;
}

export default MobileMenu;