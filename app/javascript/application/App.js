import { html } from 'htm/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/index';
import PeopleList from './components/people/PeopleList';
import PlansList from './components/plans/PlansList';
import Nutrition from './components/nutrition/index';
import Marketing from './components/marketing/index';

function App() {
  return html`
    <${BrowserRouter} basename="/dashboard">
      <${Header}/>
      <${Routes}>
        <${Route} path="/" element=${html`<${PeopleList} />`}/>
        <${Route} path="/people" element=${html`<${PeopleList} />`}/>
        <${Route} path="/plans" element=${html`<${PlansList} />`}/>
        <${Route} path="/nutrition" element=${html`<${Nutrition} />`}/>
        <${Route} path="/marketing" element=${html`<${Marketing} />`}/>
      <//>
    <//>
  `;  
}

export default App;
