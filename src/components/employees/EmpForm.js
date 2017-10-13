import React ,{ Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../css/NewEmployee.css'

const validate = (values) => {
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


  const UploadFile = ({ input: {value: omitValue,...inputProps }, meta: omitMeta,...props }) => (
    <div>
      <input type='file' {...inputProps} {...props} />
      {omitMeta.touched &&
        ((omitMeta.error &&
          <span style={{color: "red"}}>
            <p>Gaurav</p>
          </span>))}
    </div>
  );



class EmpForm extends Component{
  constructor(props){
    super(props);
    var src = this.props.initialValues? this.props.initialValues.user_photo : "";
    this.state = {
      imgSrc: src,
    }
  }

  componentWillMount() {
    if(this.props.m_user_id){
      this.props.initialize({m_user_id: this.props.m_user_id});
    }
  }

  ImagePreview(e){
  var file = e.target.files[0]
  var reader = new FileReader();
  var url = reader.readAsDataURL(file);
  reader.onloadend = function (e) {
      this.setState({
          imgSrc: reader.result
      })
    }.bind(this);
  }
  render(){
    const { handleSubmit,pristine, reset, submitting } = this.props
    const imgsrc = this.state.imgSrc
    return(
      <div>
      <div className="panel panel-default">
        <div className="panel-heading">New Employee</div>
        <div className="panel-body">
        <div className="NewEmployee">
          <form onSubmit={ handleSubmit } encType="multipart/form-data">
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
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" component={renderField} type="email"  />
            </div>
            
            <div className="form-group">
            <label htmlFor="User type">Select User type</label>
              <Field component="select" name="user_type" className="form-control">
                <option></option>
                <option value="#ff000">Red</option>
                <option value="#00ff00">Green</option>
                <option value="#0000ff">Blue</option>
            </Field>
            </div>
            <div className="form-group">
              <label>Files</label>
              <Field name="photo" component={UploadFile} onChange={this.ImagePreview.bind(this)} />
               {imgsrc && <img src={imgsrc} />}
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
