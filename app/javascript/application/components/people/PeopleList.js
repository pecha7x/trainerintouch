import { html } from 'htm/react';
import { Link } from 'react-router-dom';
import { useFetchPeopleQuery, useAddPersonMutation } from '../../store/index';
import PeopleListItem from './PeopleListItem';

function PeopleList({user=null}) {
  const { data, error, isFetching } = useFetchPeopleQuery(user);
  // const [addPerson, results] = useAddPersonMutation();

  const handleAddPerson = () => {
    // addPerson(user);
  };

  let content;
  if (isFetching) {
    // content = <Skeleton className="h-10 w-full" times={3} />;
    content = '';
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
