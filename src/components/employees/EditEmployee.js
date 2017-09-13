import React, { Component } from 'react';
import  EmpForm from './EmpForm';
import { withRouter } from 'react-router-dom';

class EditEmployee extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.fetchEmployee(this.props.id)
    }

 submit = (values) => {
   console.log(values);
    this.props.updateEmployee(values)
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
        <EmpForm onSubmit= {this.submit} initialValues={employee} />
      </div>
    )
  }
}

export default withRouter(EditEmployee);
