import React from 'react';
import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { withRouter } from './withRouter';

class TestComponent extends React.Component {
  constructor(){
    super()
    this.navigateToMain=this.navigateToMain.bind(this);
  }
  
  navigateToMain() {
    this.props.navigate('/');
  }

  render() {
    return html`
      <div>
        <h2>Streams</h2>
        <button
          onClick=${() => this.navigateToMain()}
          className="px-6 py-2 text-sm rounded shadow bg-cyan-100 hover:bg-cyan-200 text-cyan-500"
        >
          To Main
        </button>

        <${Link} to="/" className="ui button primary">
          To Main
        <//>
      </div>
    `;
  }
}

export default withRouter(TestComponent);
