import { html } from 'htm/react';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/Button';

function PeopleItem({ person_id, name, phone, status }) {
  const navigate = useNavigate();

  const handleOnDelete = (event) => {
    event.stopPropagation();
    navigate(`/people/delete/${person_id}`);
  };

  const renderActions = () => {
    return html`
      <div className="flex justify-end">
        <${Button} className='mr-2' onClick=${(e) => handleOnDelete(e) } danger outline>Delete<//>
      </div>
    `;    
  };

  return html`
    <tr key=${person_id} onClick=${() => navigate(`/people/edit/${person_id}`)} className="bg-white border-b">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${name}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${phone}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${status}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        ${renderActions()}
      </td>
    </tr>
  `;
}

export default PeopleItem;
