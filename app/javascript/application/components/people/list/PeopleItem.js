import { html } from 'htm/react';
import { Link } from 'react-router-dom';

function PeopleListItem({person}) {
  const renderActions = () => {
    return html `
      <div className="right floated content">
        <${Link} to=${`/people/edit/${person.id}`} className='ui button primary'>Edit<//>
        <${Link} to=${`/people/delete/${person.id}`} className='ui button negative'>Delete<//>
      </div>
    `;    
  };

  return html `
    <div key={person.id}>${person.name}, <b>${person.email}</b>,! ${person.phone}</div>
    ${renderActions()}
  `;
}

export default PeopleListItem;
