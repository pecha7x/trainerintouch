import { html } from 'htm/react';
import { useNavigate, useParams } from 'react-router-dom';

import PersonForm from './PersonForm';
import emptyDiv from '../../shared/skeletons/emptyDiv';
import Modal from '../../shared/Modal';
import { useUpdatePersonMutation, useFetchPersonQuery } from '../../../store/index';
import { text_notify, api_error_notify } from '../../../toastNotify';


function PersonEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isFetching } = useFetchPersonQuery(id);
  const [updatePerson, { isLoading }] = useUpdatePersonMutation();

  const onSubmit = async (formValues) => {
    const result = await updatePerson(formValues);
    if ('error' in result) {
      api_error_notify(result);
    } else {
      text_notify('Person updated', 'success');
      // redirectTo(routes.items.index)
      navigate('/people');
    }
  };

  let content;
  if (isFetching) {
    content = html `<${emptyDiv} className='h-16 w-full' times=${7} />`;
  } else if (error) {
    content = html `<div>Error loading person</div>`;
  } else {
    content = html `
      <${PersonForm}
        initialValues=${data}
        isLoading=${isLoading}
        onSubmit=${onSubmit} 
      />
    `;
  };

  return html `
    <${Modal}
      title='Edit Person'
      content=${content}
      onDismiss=${() => navigate('/people')}
    />
  `;
};

export default PersonEdit;
