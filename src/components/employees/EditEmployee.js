import React, { Component } from 'react';
import EmpForm from './EmpForm';
import { withRouter } from 'react-router-dom';

class EditEmployee extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.fetchEmployee(this.props.id)
    }

 submit = (values) => {
   let formData = new FormData();
   for(const key in values){
     if(key === 'photo'){
       formData.append(key,values[key][0])
     }
    else {
       formData.append(key,values[key])
     }
   }
   this.props.updateEmployee(formData)
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
