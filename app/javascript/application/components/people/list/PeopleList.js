import { html } from 'htm/react';
import { useNavigate } from 'react-router-dom';

import { useFetchPeopleQuery } from '../../../store/index';
import Button from '../../Button';
import emptyTableRow from '../../skeletons/emptyTableRow';
import PeopleItem from './PeopleItem';

function PeopleList() {
  const navigate = useNavigate();
  const { data, error, isFetching } = useFetchPeopleQuery();

  let people_list;
  if (isFetching) {
    people_list = html `<${emptyTableRow} times=${5} columns_count=${4} />`;
  } else if (error) {
    people_list = html `<div>Error loading people.</div>`;
  } else {
    people_list = data.map((person) => {
      return html`
        <${PeopleItem} person_id=${person.id} name=${person.name} phone=${person.phone} status=${person.status}/>
      `;
    });
  }

  return html`
    <div className='m-2 flex flex-row items-center justify-between'>
      <${Button} onClick=${() => navigate('/people/new')} success>+ Add Person<//>
    </div>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Phone</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Status</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>
                </tr>
              </thead>
              <tbody>${people_list}</tbody>
            </table>
          </div>
        </div>         
      </div>
    </div>  
  `;
}

export default PeopleList;
