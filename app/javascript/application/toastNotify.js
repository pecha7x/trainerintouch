import { html } from 'htm/react';
import { toast } from 'react-toastify';

// see the props values - https://fkhadra.github.io/react-toastify/introduction/
const default_config = {
  position:        'top-center',
  autoClose:       2000,
  hideProgressBar: false,
  closeOnClick:    true,
  pauseOnHover:    true,
  draggable:       true,
  progress:        undefined,
  theme:           'light'
};

function text_notify(message, type = '', options = {}) {
  const notify_options = {...default_config, ...options};

  switch (type) {
    case 'error':
      return toast.error(message, notify_options);
    case 'warn':
      return toast.warn(message, notify_options);
    case 'success':
      return toast.success(message, notify_options);
    case 'info':
      return toast.info(message, notify_options);
    default:
      return toast(message, notify_options);;
  };
};

function api_error_notify(result, options = {}) {
  const notify_options = {...default_config, ...options};
  const message = html `${result.error.data.errors.join('<br/>')}`;
  
  return toast.error(message, notify_options);
};

export {
  text_notify,
  api_error_notify
};