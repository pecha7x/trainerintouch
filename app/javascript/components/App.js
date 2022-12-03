import { html } from 'htm/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TestComponent from './TestComponent';

const App = () => {
  return html`
    <main>
      <${BrowserRouter}>
        <h1>Hello There!</h1>
        <${Routes}>
          <${Route} path="/" element=${TestComponent}/>
        <//>
      <//>
    </main>
  `;  
}

export default App;
