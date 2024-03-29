import { html } from 'htm/react';
import { useNavigate, useParams } from 'react-router-dom';

import emptyDiv from '../../shared/skeletons/emptyDiv';
import Modal from '../../shared/Modal';
import Button from '../../shared/Button';
import { useRemovePersonMutation, useFetchPersonQuery } from '../../../store/index';
import { text_notify, api_error_notify } from '../../../toastNotify';

function PersonDelete() {
  const navigate = useNavigate();
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
      navigate('/people');
    }
  };

  // TODO: refactroing render logic above
  let actions;
  let content;

  if (isFetching) {
    content = html `<${emptyDiv} className='h-8 w-full' times=${2} />`;
  } else if (error) {
    content = html `<div>Error loading person</div>`;
  } else {
    actions = html `
      <${Button} onClick=${() => navigate('/people')} primary outline>Cancel<//>
      <${Button} onClick=${() => onDelete(data)} danger>Delete<//>
    `;
    content = html `<div>Are you sure about delete ${data.name} ?</div>`;
  };

  return html `
    <${Modal}
      title='Delete Person'
      content=${content}
      actions=${actions}
      onDismiss=${() => navigate('/people')}
    />
  `;
}

export default PersonDelete;
