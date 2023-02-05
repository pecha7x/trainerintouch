import { html } from 'htm/react';
import { useEffect } from 'react';

import TableSearch from './TableSearch';
import TableFilters from './TableFilters';
import TableHeaderRow from './TableHeaderRow';
import TableBodyRow from './TableBodyRow';

function Table({data}) {
  

  return html`
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <div className='flex justify-between py-3 pl-2 pr-2'>
          <${TableSearch} //>
          <${TableFilters} //>
        </div>

        <div className='p-1.5 w-full inline-block align-middle'>
          <div className='overflow-hidden border rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <${TableHeaderRow} //>
              </thead>

              <tbody className='divide-y divide-gray-200'>
                <${TableBodyRow} //>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default Table;
