import { html } from 'htm/react';
import { useFetchPeopleQuery, useAddPersonMutation } from '../../store/index';
// import PeopleListItem from './PeopleListItem';

function PeopleList({user=null}) {
  const { data, error, isFetching } = useFetchPeopleQuery(user);
  const [addPerson, results] = useAddPersonMutation();

  const handleAddPerson = () => {
    addPerson(user);
  };

  let content;
  if (isFetching) {
    // content = <Skeleton className="h-10 w-full" times={3} />;
    content = '';
  } else if (error) {
    content = html `<div>Error loading people.</div>`;
  } else {
    content = data.map((person) => {
      // return <PeopleListItem key={person.id} person={person} />;
      return html `<div key={person.id}>${person.name}</div>`;
    });
  }

  return html`
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">People for ${user?.name}</h3>
        <Button loading=${results.isLoading} onClick=${handleAddPerson}>
          + Add Person
        </Button>
      </div>
      <div>${content}</div>
    </div>
  `;
}

export default PeopleList;
