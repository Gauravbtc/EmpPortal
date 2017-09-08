import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
class NewEmployee extends Component {
  constructor(props) {
    super(props);
     this.state = {
      emp: {
        firstname: '',
        lastname: '',
        email: '',
        gender: 'male',
        status: false,
      },
   };
   this.saveEmployee = this.saveEmployee.bind(this);
   this.setGender = this.setGender.bind(this);
   this.updateEmployeeState = this.updateEmployeeState.bind(this);
  }
  
   updateEmployeeState(event){
    console.log(event.target);
    const field = event.target.name;
    const emp= this.state.employee;
    emp[field] = event.target.value;
    return this.setState({emp: emp});
   }

   saveEmployee(event) {
    //event.preventDefault();
    this.props.createEmployee(this.state.emp)
  }

  setGender(event){
    const emp = this.state.emp;
    const field = event.target.name
    emp[field] = event.target.value;
    this.setState({emp: emp});
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.newEmployee.success){
      this.props.history.push("/employee")
    }
  }


  render(){
    const { employee, loading, error,success} = this.props.newEmployee;
    console.log("jj"+ JSON.stringify(this.props.newEmployee))
    if(loading) {
      return <div className="container"><h1>Employees</h1><h3>Creating...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div>
          {console.log(this.state.emp)}
          <EmployeeForm emp={this.state.emp} onSave ={this.state.saveEmployee} updateEmployeeState={this.updateEmployeeState} />
      </div>
    );
  }
}
export default NewEmployee;
