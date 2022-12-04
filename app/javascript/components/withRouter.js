import { html } from 'htm/react';
import { useNavigate } from 'react-router-dom';

export const withRouter = Component => {
  const Wrapper = props => {
    const navigate = useNavigate();
    return html`
      <${Component} navigate=${navigate} ...${props} />
    `;
  };

  return Wrapper;
};
