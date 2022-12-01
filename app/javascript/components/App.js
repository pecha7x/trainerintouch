import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

function App() {
  return html`
    <main>
      <h1 class='font-medium text-indigo-600 hover:text-indigo-500'>Rails Todo Playground</h1>
      <div className="container">
        Hello There!
      </div>
    </main>`;
}

export default App;