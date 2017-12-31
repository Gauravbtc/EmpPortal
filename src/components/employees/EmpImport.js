import React ,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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

class EmpImport extends Component{
  render(){
    const { handleSubmit,pristine, reset, submitting } = this.props    
    return(
      <div>
      <form onSubmit={ handleSubmit } encType="multipart/form-data">
       <div className="form-group">
        <label>Files</label>
          <Field name="file" component={UploadFile} />
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
    )
  }
}

EmpImport = reduxForm({
  // a unique name for the form
  form: 'EmployeeImport'
})(EmpImport)

export default EmpImport;