import { html } from 'htm/react';

function PeopleListItem({person}) {
  return html `<div key={person.id}>${person.name}, <b>${person.email}</b>, ${person.phone}</div>`;
}

export default PeopleListItem;
