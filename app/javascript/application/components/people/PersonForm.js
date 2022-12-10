import { html } from 'htm/react';
import { Form, Field } from 'react-final-form';

function PersonForm(props) {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return html`
        <div class="ui error message"><div class="header">${error}</div></div>
      `;
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return html`
      <div class=${className}>
        <label>${label}</label>
        <input ...${input} autocomplete="off" />
        ${renderError(meta)}
      </div>
    `;
  };

  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };

  return html`
    <${Form}
      initialValues=${props.initialValues}
      onSubmit=${onSubmit}
      validate=${formValues => {
        const errors = {};

        if (!formValues.name) {
          errors.name = 'You must enter a name';
        }

        return errors;
      }}
      render=${({ handleSubmit }) =>
        html`
          <form onSubmit=${handleSubmit} class='ui form error'>
            <${Field}
              name='name'
              component=${renderInput}
              label='Enter Name'
            />
            <${Field}
              name='phone'
              component=${renderInput}
              label='Enter Phone'
            />
            <${Field}
              name='email'
              component=${renderInput}
              label='Enter Email'
            />
            <${Field}
              name='gender'
              component=${renderInput}
              label='Enter Gender'
            />
            <${Field}
              name='dob'
              component=${renderInput}
              label='Enter DOB'
            />
            <button class='ui button primary'>Submit</button>
          </form>
        `}
    />
  `;
};

export default PersonForm;
