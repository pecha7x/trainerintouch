import { html } from 'htm/react';
import PersonForm from "./PersonForm";
import { useAddPersonMutation } from '../../store/index';

function PersonCreate() {
  const [addPerson, results] = useAddPersonMutation();

  const onSubmit = (formValues) => {
    addPerson(formValues);
    console.log(results);
  };

  return html`
    <div>
      <h3>Create a Person</h3>
      <${PersonForm} isLoading=${results.isLoading} onSubmit=${onSubmit} />
    </div>
  `;
};

export default PersonCreate;
