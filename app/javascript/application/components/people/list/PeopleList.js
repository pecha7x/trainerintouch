import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { useFetchPeopleQuery } from '../../../store/index';
import Skeleton from '../../Skeleton';
import PeopleListItem from './PeopleItem';

function PeopleList({user=null}) {
  const { data, error, isFetching } = useFetchPeopleQuery(user);

  let content;
  if (isFetching) {
    content = html `<${Skeleton} className='h-10 w-full' times=${5} />`;
  } else if (error) {
    content = html `<div>Error loading people.</div>`;
  } else {
    content = data.map((person) => {
      return html`<${PeopleListItem} key=${person.id} person=${person}/>`;
    });
  }

  return html`
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">People for ${user?.name}</h3>
        <${Link} to="/people/new">+ Add Person<//>
      </div>
      <div>${content}</div>
    </div>
  `;
}

export default PeopleList;
