import { html } from 'htm/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/index';
import Dashboard from './components/dashboard/Dashboard';
import PeopleList from './components/people/list/PeopleList';
import PersonCreate from './components/people/edit/PersonCreate';
import PersonEdit from './components/people/edit/PersonEdit';
import PersonDelete from './components/people/delete/PersonDelete';
import PlansList from './components/plans/PlansList';
import Nutrition from './components/nutrition/index';
import Marketing from './components/marketing/index';

function App() {
  return html`
    <${BrowserRouter} basename="/dashboard">
      <${ToastContainer} position='top-center'/>
      <${Header}/>
      <${Routes}>
        <${Route} path="/" element=${html`<${Dashboard} />`}/>
        <${Route} path="/people" element=${html`<${PeopleList} />`}/>
        <${Route} path="/people/new" element=${html`<${PersonCreate} />`}/>
        <${Route} path="/people/edit/:id" element=${html`<${PersonEdit} />`}/>
        <${Route} path="/people/delete/:id" element=${html`<${PersonDelete} />`}/>
        <${Route} path="/plans" element=${html`<${PlansList} />`}/>
        <${Route} path="/nutrition" element=${html`<${Nutrition} />`}/>
        <${Route} path="/marketing" element=${html`<${Marketing} />`}/>
        <${Route} path="*" element=${html`<${Navigate} to="/" replace />`}/>
      <//>
    <//>
  `;  
}

export default App;
