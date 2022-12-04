import { html } from 'htm/react';
import { useNavigate, Link } from 'react-router-dom';

const MainComponent = () => {
  // TODO: use navigation via withRouter wrapper
  const navigate = useNavigate();
  const navigateToTest = () => navigate('/test');

  return html`
    <h1>Hello Main!</h1>
    <button
      onClick=${() => navigateToTest()}
      className="px-6 py-2 text-sm rounded shadow bg-cyan-100 hover:bg-cyan-200 text-cyan-500"
    >
      To Test
    </button>
    <${Link} to="/test" className="ui button primary">
      To Test
    <//>
  `;
}

export default MainComponent;
