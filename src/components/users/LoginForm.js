import React ,{ Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required'
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


class LoginForm extends Component{
  render(){
    const { handleSubmit,pristine, reset, submitting } = this.props
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">Login</div>
        <div className="panel-body">
        <div className="NewEmployee">
          <form onSubmit={ handleSubmit }>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" component={renderField} type="email"  />
            </div>

            <div className="form-group">
              <label htmlFor="email">Password</label>
              <Field name="password" component={renderField} type="password"  />
            </div>
            <div className="form-group">
              <div>
                <button type="submit" disabled={submitting} className="btn btn-primary">Login</button>
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


LoginForm = reduxForm({
  // a unique name for the form
  form: 'LoginForm',
  validate
})(LoginForm)

export default LoginForm;
