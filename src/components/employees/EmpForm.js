import React ,{ Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../css/NewEmployee.css';


const validate = values => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = 'First name is required'
  }
  if (!values.lastname) {
    errors.lastname = 'Last name is required'
  }

  if(!values.gender){
    errors.gender="Select gender"
  }

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderField = ({input,label,type,meta: { touched, error }}) =>
  <div>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched &&
        ((error &&
          <span style={{color: "red"}}>
            {error}
          </span>))}
    </div>
  </div>


let EmpForm = props => {
  const { handleSubmit,pristine, reset, submitting} = props
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">New Employee</div>
        <div className="panel-body">
        <div className="NewEmployee">
          <form onSubmit={ handleSubmit }>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstname" component= {renderField} type="text" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastname" component={renderField} type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
                <div>
                <Field component={RadioGroup} name="gender" options={[
                  { title: 'Male', value: 'male' },
                  { title: 'Female', value: 'female' }
                ]} />
                </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" component={renderField} type="email" />
            </div>
            <div className="form-group">
              <div>
                <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger rest-btn">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
        </div>
    </div>
  )
}
EmpForm = reduxForm({
  // a unique name for the form
  form: 'Employee',
  validate
})(EmpForm)

export default EmpForm;



class RadioGroup extends Component {
    render() {
        const { input, meta, options } = this.props
        const hasError = meta.touched && meta.error;
        return (
            <div>
                {options.map(o => <label key={o.value}><input type="radio" {...input} value={o.value} checked={o.value === input.value} /> {o.title}</label>)}
                {hasError && <span style={{color: "red"}}>{meta.error}</span>}
            </div>
        );
    }
}
