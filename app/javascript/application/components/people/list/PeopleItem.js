import { html } from 'htm/react';
import Button from '../../Button';
import { withRouter } from '../../../withRouter';

function PeopleItem(props) {
  const person = props.person;

  const handleOnDelete = (event) => {
    event.stopPropagation();
    props.navigate(`/people/delete/${person.id}`);
  };

  const renderActions = () => {
    return html`
      <div className="flex justify-end">
        <${Button} className='mr-2' onClick=${(e) => handleOnDelete(e) } danger outline>Delete<//>
      </div>
    `;    
  };

  return html`
    <tr key=${person.id} onClick=${() => props.navigate(`/people/edit/${person.id}`)} className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${person.name}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${person.phone}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${person.status}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        ${renderActions()}
      </td>
    </tr>
  `;
}

export default withRouter(PeopleItem);
