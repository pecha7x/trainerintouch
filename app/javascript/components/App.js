import { html } from 'htm/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemplateFunctionComponent from './TemplateFunctionComponent';
import TemplateClassComponent from './TemplateClassComponent';

const App = () => {
  return html`
    <${BrowserRouter} basename="/dashboard">
      <${Routes}>
        <${Route} path="/" element=${html`<${TemplateFunctionComponent} />`}/>
        <${Route} path="/test_class_component" element=${html`<${TemplateClassComponent} />`}/>
      <//>
    <//>
  `;  
}

export default App;
