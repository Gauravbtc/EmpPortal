import React, { Component } from 'react';
import '../../css/NewEmployee.css';
import { FormGroup,FormControl,ControlLabel,Button,Radio} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class EmployeeForm extends Component{
  constructor(props) {
    super(props);
     this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gender: 'male',
      status: false,
      errors: {}
     };
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleValidation(){
    let errors = {};
    let formIsValid = true;
    if(!this.state.firstname){
      console.log(!this.state.firtname);
        formIsValid = false;
        errors["firstname"] = "First name is required";
      }
      else{
        if(!this.state.firstname.match(/^[a-zA-Z]+$/)){
             formIsValid = false;
             errors["firstname"] = "Only letters";
           }
      }

     if(!this.state.lastname){
         formIsValid = false;
         errors["lastname"] = "Last name is required";
       }

    else{
     if(typeof(this.state.lastname!== "undefined")){
      	if(!this.state.lastname.match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["lastname"] = "Only letters";
        }
      }
    }

      if(!this.state.email){
            formIsValid = false;
            errors["email"] = "Email id is required";
        }
      else{
        if(typeof(this.state.email !== "undefined")){
        	let lastAtPos = this.state.email.lastIndexOf('@');
        	let lastDotPos = this.state.email.lastIndexOf('.');

        	if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
          }
        }
      }

      if(!this.state.gender){
        formIsValid = false;
        errors["gender"] = "Gender is required";
      }
      this.setState({errors: errors});
      return formIsValid;
  }
  setGender(event) {
    this.setState({gender: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.handleValidation()){
      let params= {firstname: this.state.firstname,lastname: this.state.lastname,email: this.state.email, gender: this.state.gender,status: this.state.status};
      this.props.createEmployee(params);
      }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.newEmployee.success){
      this.props.history.push("/employee")
    }
  }


  render(){
    //console.log(JSON.stringify(this.props.newEmployee))
    const { employee, loading, error,success} = this.props.newEmployee;
    if(loading) {
      return <div className="container"><h1>Employees</h1><h3>Creating...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div>
        <div className="panel panel-default">
            <div className="panel-heading">New Employee</div>
            <div className="panel-body">
              <div className="NewEmployee">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <FormGroup controlId="firstname">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.handleChange.bind(this)} />
                       <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
                  </FormGroup>
                  <FormGroup controlId="lastname">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      value={this.state.lastname}
                      name="lastname"
                      onChange={this.handleChange.bind(this)}
                      type="text" />
                      <span style={{color: "red"}}>{this.state.errors["lastname"]}</span>
                  </FormGroup>
                  <FormGroup controlId="gender">
                    <ControlLabel>Gender</ControlLabel>
                    <Radio value="male" name="gender" onChange={this.setGender.bind(this)} defaultChecked={true} >Male</Radio>
                    <Radio value="female" name="gender" onChange={this.setGender.bind(this)}>Female</Radio>
                    <span style={{color: "red"}}>{this.state.errors["gender"]}</span>
                  </FormGroup>
                  <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange.bind(this)}
                      type="email" />
                      <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                  </FormGroup>
                  <Button type="submit" value="Submit"  bsStyle="primary">Submit</Button>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
    }
  }
export default EmployeeForm;
