import { html } from 'htm/react';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    html`
      <div onclick=${props.onDismiss} class="ui dimmer modals visible active">
        <div
          onclick=${e => e.stopPropagation()}
          class="ui standard modal visible active"
        >
          <div class="header">${props.title}</div>
          <div class="content">${props.content}</div>
          <div class="actions">${props.actions}</div>
        </div>
      </div>
    `,
    document.querySelector('#modal')
  );
};

export default Modal;
