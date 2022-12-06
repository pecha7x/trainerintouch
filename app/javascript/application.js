import { html } from 'htm/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './application/App';
import { store } from './application/store/index';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  html`
    <${Provider} store=${store}>
      <${App}/>
    <//>
  `
);
