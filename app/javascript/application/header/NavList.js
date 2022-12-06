import React from 'react';
import { html } from 'htm/react';
import { Link } from 'react-router-dom';

const NavList = (props) => {
  return html`
    <${Link} to="/people" className=${props.linkClassName}>People<//>
    <${Link} to="/plans" className=${props.linkClassName}>Plans<//>
    <${Link} to="/nutrition" className=${props.linkClassName}>Nutrition<//>
    <${Link} to="/marketing" className=${props.linkClassName}>Marketing<//>
  `;
}

export default NavList;