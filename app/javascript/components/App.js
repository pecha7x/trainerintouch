import { html } from 'htm/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainComponent from './MainComponent';
import TestComponent from './TestComponent';

const App = () => {
  return html`
    <${BrowserRouter} basename="/dashboard">
      <${Routes}>
        <${Route} path="/" element=${html`<${MainComponent} />`}/>
        <${Route} path="/test" element=${html`<${TestComponent} />`}/>
      <//>
    <//>
  `;  
}

export default App;
