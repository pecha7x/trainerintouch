import { html } from 'htm/react';
import { Link } from 'react-router-dom';

function NavList({linkClassName}) {
  return html`
    <${Link} to="/people" className=${linkClassName}>People<//>
    <${Link} to="/plans" className=${linkClassName}>Plans<//>
    <${Link} to="/nutrition" className=${linkClassName}>Nutrition<//>
    <${Link} to="/marketing" className=${linkClassName}>Marketing<//>
  `;
}

export default NavList;