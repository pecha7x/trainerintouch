import { html } from 'htm/react';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    html`
      <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div onClick=${props.onDismiss} className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>          
          <div
            onClick=${e => e.stopPropagation()}
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-10 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="flex items-center justify-center pt-3 text-gray-700">
              ${props.title}
            </div>

            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              ${props.content}
            </div>

            <div className="flex justify-end px-3 mb-3">
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
