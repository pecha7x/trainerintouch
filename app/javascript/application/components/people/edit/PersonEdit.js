import { html } from 'htm/react';
import { useParams } from 'react-router-dom';
import PersonForm from './PersonForm';
import { useUpdatePersonMutation, useFetchPersonQuery } from '../../../store/index';
import { withRouter } from '../../../withRouter';
import Skeleton from '../../Skeleton';
import Modal from '../../Modal';
import { text_notify, api_error_notify } from '../../../toastNotify';


function PersonEdit(props) {
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
      props.navigate('/people');
    }
  };

  let content;
  if (isFetching) {
    content = html `<${Skeleton} className='h-10 w-full' times=${1} />`;
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
      onDismiss=${() => props.navigate('/people')}
    />
  `;
};

export default withRouter(PersonEdit);
