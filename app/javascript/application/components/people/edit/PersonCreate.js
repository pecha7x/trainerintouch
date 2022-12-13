import { html } from 'htm/react';
import PersonForm from './PersonForm';
import { useAddPersonMutation } from '../../../store/index';
import { withRouter } from '../../../withRouter';
import Modal from '../../Modal';
import { text_notify, api_error_notify } from '../../../toastNotify';


function PersonCreate(props) {
  const [addPerson, { isLoading }] = useAddPersonMutation();

  const onSubmit = async (formValues) => {
    const result = await addPerson(formValues);
    if ('error' in result) {
      api_error_notify(result);
    } else {
      text_notify('Person added', 'success');
      // redirectTo(routes.items.index)
      props.navigate('/people');
    }
  };

  const content = html `<${PersonForm} isLoading=${isLoading} onSubmit=${onSubmit} />`;

  return html `
    <${Modal}
      title='Create a Person'
      content=${content}
      onDismiss=${() => props.navigate('/people')}
    />
  `;
};

export default withRouter(PersonCreate);
