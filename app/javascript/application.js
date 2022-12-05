import { html } from 'htm/react';
import { createRoot } from 'react-dom/client';
import App from './application/App';

const root = createRoot(document.getElementById('root'));
root.render(html`<${App}/>`);
