import { html } from 'htm/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/index';
import PeopleList from './components/people/list/PeopleList';
import PersonCreate from './components/people/edit/PersonCreate'; // TODO: mover under modal
import PersonDelete from './components/people/delete/PersonDelete'; // TODO: mover under modal
import PlansList from './components/plans/PlansList';
import Nutrition from './components/nutrition/index';
import Marketing from './components/marketing/index';

function App() {
  return html`
    <${BrowserRouter} basename="/dashboard">
      <${ToastContainer} position='top-center'/>
      <${Header}/>
      <${Routes}>
        <${Route} path="/" element=${html`<${PeopleList} />`}/>
        <${Route} path="/people" element=${html`<${PeopleList} />`}/>
        <${Route} path="/people/new" element=${html`<${PersonCreate} />`}/>
        <${Route} path="/people/delete/:id" element=${html`<${PersonDelete} />`}/>
        <${Route} path="/plans" element=${html`<${PlansList} />`}/>
        <${Route} path="/nutrition" element=${html`<${Nutrition} />`}/>
        <${Route} path="/marketing" element=${html`<${Marketing} />`}/>
      <//>
    <//>
  `;  
}

export default App;
