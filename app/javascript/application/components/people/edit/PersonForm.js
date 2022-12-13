import { html } from 'htm/react';
import { Form, Field } from 'react-final-form';
import Button from '../../Button';
import { withRouter } from '../../../withRouter';

function PersonForm(props) {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return html`
        <div class="ui error message"><div class="header">${error}</div></div>
      `;
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `form-group mb-6 ${meta.error && meta.touched ? 'error' : ''}`;
    return html`
      <div className=${className}>
        <label className='form-label inline-block mb-2 text-gray-700'>${label}</label>
        <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' ...${input} autocomplete='off' />
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

        // if (!formValues.name) {
        //   errors.name = 'You must enter a name';
        // }

        return errors;
      }}
      render=${({ handleSubmit }) =>
        html`
          <form onSubmit=${handleSubmit}>
            <${Field}
              name='name'
              component=${renderInput}
              label='Person Name'
            />
            <${Field}
              name='phone'
              component=${renderInput}
              label='Phone Number'
            />
            <${Field}
              name='email'
              component=${renderInput}
              label='Email Address'
            />
            <${Field}
              name='gender'
              component=${renderInput}
              label='Person Gender'
            />
            <${Field}
              name='dob'
              component=${renderInput}
              label='Day of Birthday'
            />
            <div className="flex justify-between mb-2">
              <${Button} type='button' onClick=${() => props.navigate('/people')} danger outline>Cancel<//>
              <${Button} type='submit' loading=${props.isLoading} primary>Submit<//>
            </div>
          </form>
        `
      }
    />
  `;
};

export default withRouter(PersonForm);
