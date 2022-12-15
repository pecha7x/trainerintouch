import { html } from 'htm/react';

function emptyTableRow({ times, columns_count, className }) {
  const columns = Array(columns_count)
    .fill(0)
    .map((_, _i) => {
      return html `
        <td className='empty-table-column'></td>
      `;
    });

  const rows = Array(times)
    .fill(0)
    .map((_, _i) => {
      return html `
        <tr className="empty-table-row ${className}">
          ${columns}
        </tr>
      `;
    });

  return rows;  
}

export default emptyTableRow;
