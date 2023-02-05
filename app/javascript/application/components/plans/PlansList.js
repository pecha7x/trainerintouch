import { html } from 'htm/react';

import Table from '../shared/table/Table';

function PlansList() {
  return html`
    <h1>PlansList</h1>
    <${Table} //>
  `;
}

export default PlansList;
