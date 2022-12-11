import { html } from 'htm/react';
import { useParams } from 'react-router-dom';
import { withRouter } from '../../../withRouter';
import Skeleton from '../../Skeleton';
import Modal from '../../Modal';
import Button from '../../Button';
import { useRemovePersonMutation, useFetchPersonQuery } from '../../../store/index';
import { text_notify, api_error_notify } from '../../../toastNotify';

function PersonDelete(props) {
  const { id } = useParams();
  const { data, error, isFetching } = useFetchPersonQuery(id);
  const [removePerson, results] = useRemovePersonMutation();

  const onDelete = async (person) => {
    removePerson(person)
    if ('error' in results) {
      api_error_notify(results);
    } else {
      text_notify(`Person ${person.name} deleted`, 'success');
      // redirectTo(routes.items.index)
      props.navigate('/people');
    }
  };

  // TODO: refactroing render logic above
  let actions;
  let content;

  if (isFetching) {
    content = html `<${Skeleton} className='h-10 w-full' times=${1} />`;
  } else if (error) {
    content = html `<div>Error loading person</div>`;
  } else {
    actions = html `
      <${Button} onClick=${() => onDelete(data)} danger>Delete<//>
      <${Button} onClick=${() => props.navigate('/people')} primary>Cancel<//>
    `;
    content = html `<div>Are you sure about delete ${data.name} ?</div>`;
  };

  return html `
    <${Modal}
      title='Delete Person'
      content=${content}
      actions=${actions}
      onDismiss=${() => props.navigate('/people')}
    />
  `;
}

export default withRouter(PersonDelete);;
