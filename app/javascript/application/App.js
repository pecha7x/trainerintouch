import { html } from 'htm/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/index';
import PeopleList from './people/PeopleList';
import PlansList from './plans/PlansList';
import Nutrition from './nutrition/index';
import Marketing from './marketing/index';

import TemplateClassComponent from './TemplateClassComponent';

function App() {
  return html`
    <${BrowserRouter} basename="/dashboard">
      <${Header}/>
      <${Routes}>
        <${Route} path="/" element=${html`<${TemplateClassComponent} />`}/>
        <${Route} path="/people" element=${html`<${PeopleList} />`}/>
        <${Route} path="/plans" element=${html`<${PlansList} />`}/>
        <${Route} path="/nutrition" element=${html`<${Nutrition} />`}/>
        <${Route} path="/marketing" element=${html`<${Marketing} />`}/>
      <//>
    <//>
  `;  
}

export default App;
