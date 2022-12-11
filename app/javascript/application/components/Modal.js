import { html } from 'htm/react';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    html`
      <div class="fixed z-10 overflow-y-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div onclick=${props.onDismiss} class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>          
          <div onclick=${e => e.stopPropagation()} class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              ${props.content}
            </div>

            <div class="px-4 py-3 text-right">
              ${props.actions}
            </div>
          </div>
        </div>
      </div>
    `,
    document.querySelector('#modal')
  );
};

export default Modal;
