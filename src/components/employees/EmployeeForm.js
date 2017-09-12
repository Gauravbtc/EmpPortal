import React, { Component } from 'react';
import '../../css/NewEmployee.css';
import { FormGroup,FormControl,ControlLabel,Button,Radio} from 'react-bootstrap';

class EmployeeForm extends Component{
  render(){
    return(
      <div>
        <div className="panel panel-default">
            <div className="panel-heading">New Employee</div>
            <div className="panel-body">
              <div className="NewEmployee">
                <form>
                  <FormGroup controlId="firstname">
                  {this.props.saveEmployee}
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      name="firstname"
                      value={this.props.emp.firstname}
                      onChange={this.props.updateEmployeeState} />
                      <span style={{color: "red"}}>{this.props.errors.firstname}</span>
                  </FormGroup>
                  <FormGroup controlId="lastname">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      value={this.props.emp.lastname}
                      name="lastname"
                      onChange={this.props.updateEmployeeState}
                      type="text" />
                      <span style={{color: "red"}}>{this.props.errors.lastname}</span>
                  </FormGroup>
                  <FormGroup controlId="gender" onChange={this.props.setGender}>
                    <ControlLabel>Gender</ControlLabel>
                    <Radio value="male" name="gender" defaultChecked={this.props.emp.gender === "male" ? true : false}>Male</Radio>
                    <Radio value="female" name="gender" defaultChecked={this.props.emp.gender === "female" ? true : false}>Female</Radio>
                  </FormGroup>
                  <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      name="email"
                      value={this.props.emp.email}
                      onChange={this.props.updateEmployeeState}
                      type="email" />
                      <span style={{color: "red"}}>{this.props.errors.email}</span>
                  </FormGroup>
                  <Button type="submit" value="Submit" onClick={this.props.saveEmployee} bsStyle="primary">Submit</Button>
                </form>
              </div>
            </div>
        </div>
      </div>
    );
    }
  }
export default EmployeeForm;
