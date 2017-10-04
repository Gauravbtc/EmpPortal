import React ,{ Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = (values) => {
  const errors = {}

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

class ForgotPasswordForm extends Component{
  render(){
    const { handleSubmit,pristine, reset, submitting } = this.props
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">Forgot Password</div>
        <div className="panel-body">
        <div className="NewEmployee">
          <form onSubmit={ handleSubmit }>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" component={renderField} type="email"  />
            </div>
            <div className="form-group">
              <div>
                <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
        </div>
        </div>
    </div>
    )
  }
}
ForgotPasswordForm = reduxForm({
  // a unique name for the form
  form: 'ForgotPasswordForm',
  validate
})(ForgotPasswordForm)

export default ForgotPasswordForm;
