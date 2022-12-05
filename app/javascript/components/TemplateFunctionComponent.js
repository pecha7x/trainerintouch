import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { withRouter } from '../withRouter';

const TemplateFunctionComponent = (props) => {
  const navigateToClassComponent = () => {
    props.navigate('/test_class_component');
  }

  return html`
    <h1>Template of Function Component</h1>
    <button
      onClick=${() => navigateToClassComponent()}
      className="px-6 py-2 text-sm rounded shadow bg-cyan-100 hover:bg-cyan-200 text-cyan-500"
    >
      To Class Component
    </button>
    <${Link} to="/test_class_component" className="ui button primary">
      To Class Component
    <//>
  `;
}

export default withRouter(TemplateFunctionComponent);
