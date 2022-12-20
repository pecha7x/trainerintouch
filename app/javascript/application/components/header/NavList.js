import { html } from 'htm/react';
import { NavLink } from 'react-router-dom';

function NavList({linkClassName}) {
  return html`
    <${NavLink} to="/" className=${linkClassName}>Dashboard<//>
    <${NavLink} to="/people" className=${linkClassName}>People<//>
    <${NavLink} to="/plans" className=${linkClassName}>Plans<//>
    <${NavLink} to="/nutrition" className=${linkClassName}>Nutrition<//>
    <${NavLink} to="/marketing" className=${linkClassName}>Marketing<//>
  `;
}

export default NavList;