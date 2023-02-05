import { html } from 'htm/react';

function TableHeaderRow() {
  return html `
    <tr>
      <th scope='col' className='py-3 pl-4'>
        <div className='flex items-center h-5'>
          <input
            id='checkbox-all'
            type='checkbox'
            className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
          />
        </div>
      </th>
      <th
        scope='col'
        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
      >
        ID
      </th>
      <th
        scope='col'
        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
      >
        Name
      </th>
      <th
        scope='col'
        className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
      >
        Email
      </th>
      <th
        scope='col'
        className='px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase '
      >
        Edit
      </th>
      <th
        scope='col'
        className='px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase '
      >
        Delete
      </th>
    </tr>
  `;
}

export default TableHeaderRow;
