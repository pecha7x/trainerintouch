import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { useFetchPeopleQuery } from '../../../store/index';
import Skeleton from '../../Skeleton';
import PeopleListItem from './PeopleItem';

function PeopleList() {
  const { data, error, isFetching } = useFetchPeopleQuery();

  let content;
  if (isFetching) {
    content = html `<${Skeleton} className='h-10 w-full' times=${5} />`;
  } else if (error) {
    content = html `<div>Error loading people.</div>`;
  } else {
    content = data.map((person) => {
      return html`<${PeopleListItem} person=${person}/>`;
    });
  }

  return html`
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <${Link} to='/people/new'>+ Add Person<//>
      </div>
      <div>${content}</div>
    </div>
  `;
}

export default PeopleList;
