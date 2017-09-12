import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { withRouter } from 'react-router-dom';

class EditEmployee extends Component{
  constructor(props) {
    super(props);
     this.state = {
       emp: {
         firstname: '',
         lastname: '',
         email: '',
         gender: '',
         status: false,
       },
      errors: {
        firstname: '',
        lastname: '',
        email: ''
      }
   };
   this.saveEmployee = this.saveEmployee.bind(this);
   this.setGender = this.setGender.bind(this);
   this.updateEmployeeState = this.updateEmployeeState.bind(this);
   this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount(){
      this.props.fetchEmployee(this.props.id)
    }

    updateEmployeeState(event){
     const field = event.target.name;
     const emp= this.state.emp;
     emp[field] = event.target.value;
     return this.setState({emp: emp});
    }

    setGender(event){
      const emp = this.state.emp;
      const field = event.target.name
      emp[field] = event.target.value;
      return this.setState({emp: emp});
    }

    handleValidation(){
      let errors = this.state.errors;
      let formIsValid = true;
      let emp = this.state.emp;

      if(!emp.firstname){
        console.log(!this.state.firtname);
          formIsValid = false;
          errors.firstname = "First name is required";
        }
        else{
          if(!emp.firstname.match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors.firstname = "Only letters";
             }
        }

       if(!emp.lastname){
           formIsValid = false;
           errors.lastname= "Last name is required";
         }

      else{
       if(typeof(emp.lastname!== "undefined")){
         if(!emp.lastname.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors.lastname = "Only letters";
          }
        }
      }

        if(!emp.email){
              formIsValid = false;
              errors.email = "Email id is required";
          }
        else{
          if(typeof(emp.email !== "undefined")){
           let lastAtPos = emp.email.lastIndexOf('@');
           let lastDotPos = emp.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && emp.email.indexOf('@@') === -1 && lastDotPos > 2 && (emp.email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors.email = "Email is not valid";
            }
          }
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    saveEmployee(event) {
     event.preventDefault();
     if(this.handleValidation()){
       this.props.updateEmployee(this.state.emp)
   }
 }

   componentWillReceiveProps(nextProps) {
     if (!nextProps.editEmployee.loading){
       this.setState({emp: nextProps.editEmployee.employee});
     }
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
        <EmployeeForm emp={this.state.emp} saveEmployee ={this.saveEmployee} updateEmployeeState={this.updateEmployeeState} setGender= {this.setGender} errors= {this.state.errors} />
      </div>
    )
  }
}

export default withRouter(EditEmployee);
