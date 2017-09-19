import React, { Component } from 'react';
import EmpForm from './EmpForm';
import { withRouter } from 'react-router-dom';
//import FileInput from './FileInput';

class EditEmployee extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.fetchEmployee(this.props.id)
    }

 submit = (values) => {
   let formData = new FormData();
   console.log(values);
  //  //console.log(values);
  //  values["photo"] = values.photo
  // //  //values["id"] =  values.id
  // //  //console.log(values.photo);
  // //  for(const key in values){
  // //    if(key === 'photo'){
  // //      console.log("photo");
  // //      console.log(key + "=>" + values[key]);
  // //      formData.append(key,values[key])
  // //    }
  // //   else {
  // //     console.log(key + "=>" + values[key]);
  // //      formData.append(key,values[key])
  // //    }
  // //  }
  //  //console.log(JSON.strigify(formData));
 //this.props.updateEmployee(values)
 }

   componentWillReceiveProps(nextProps) {
     if (nextProps.updateEmp.success){
        this.props.history.push('/employee');
     }
   }

   componentWillUnmount(){
    this.props.resetMe();
  }


  render(){
    const { employee, error, loading } = this.props.editEmployee;
    if(loading){
      return <div className="container"><h1>Employee</h1><h3>Loading...</h3></div>
    }else if(error){
      return <div className="alert alert-danger">Error: {error.message}</div>
    } else if (!employee) {
      return <span />
    }
    return(
      <div>
        {console.log(employee.image_url)}
        <EmpForm onSubmit= {this.submit} initialValues={employee} />
      </div>
    )
  }
}

export default withRouter(EditEmployee);
