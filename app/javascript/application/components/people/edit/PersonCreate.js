import { html } from 'htm/react';
import { useNavigate } from 'react-router-dom';

import PersonForm from './PersonForm';
import Modal from '../../Modal';
import { useAddPersonMutation } from '../../../store/index';
import { text_notify, api_error_notify } from '../../../toastNotify';


function PersonCreate() {
  const navigate = useNavigate();
  const [addPerson, { isLoading }] = useAddPersonMutation();

  const onSubmit = async (formValues) => {
    const result = await addPerson(formValues);
    if ('error' in result) {
      api_error_notify(result);
    } else {
      text_notify('Person added', 'success');
      // redirectTo(routes.items.index)
      navigate('/people');
    }
  };

  const content = html `<${PersonForm} isLoading=${isLoading} onSubmit=${onSubmit} />`;

  return html `
    <${Modal}
      title='Create a Person'
      content=${content}
      onDismiss=${() => navigate('/people')}
    />
  `;
};

export default PersonCreate;
