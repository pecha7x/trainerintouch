import { html } from 'htm/react';

function TableBodyRow() {
  return html `
    <tr>
      <td className='py-3 pl-4'>
        <div className='flex items-center h-5'>
          <input
            type='checkbox'
            className='text-blue-600 border-gray-200 rounded focus:ring-blue-500'
          />
        </div>
      </td>
      <td className='px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap'>
        1
      </td>
      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
        Jone Doe
      </td>
      <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
        jonne62@gmail.com
      </td>
      <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
        <a
          className='text-green-500 hover:text-green-700'
          href='#'
        >
          Edit
        </a>
      </td>
      <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
        <a
          className='text-red-500 hover:text-red-700'
          href='#'
        >
          Delete
        </a>
      </td>
    </tr>
  `;
}

export default TableBodyRow;
