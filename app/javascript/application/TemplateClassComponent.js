import React from 'react';
import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { withRouter } from './withRouter';

class TemplateClassComponent extends React.Component {
  constructor() {
    super()
    this.navigateToFuncComponent=this.navigateToFuncComponent.bind(this);
  }
  
  navigateToFuncComponent() {
    this.props.navigate('/');
  }

  render() {
    return html`
      <div>
        <h1>Template of Class Component</h2>
        <button
          onClick=${() => this.navigateToFuncComponent()}
          className="px-6 py-2 text-sm rounded shadow bg-cyan-100 hover:bg-cyan-200 text-cyan-500"
        >
          To Function Component
        </button>

        <${Link} to="/" className="ui button primary">
          To Function Component
        <//>
      </div>
    `;
  }
}

export default withRouter(TemplateClassComponent);
