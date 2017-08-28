import React, { Component } from 'react';
import './NewEmployee.css';
import { FormGroup,FormControl,ControlLabel,Button,Radio} from 'react-bootstrap';
import { createStore } from 'redux';
import { addEmp } from '../../actions/employee';
import  employee  from '../../reducers/employee/employee';
class NewEmployee extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      status: false
    };
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  setGender(event) {
    this.setState({
      gender: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const store = createStore(employee);
    let params= {firstname: this.state.firstname,lastname: this.state.lastname,email: this.state.email, gender: this.state.gender,status: this.state.status};
    store.dispatch(addEmp(params));
    this.setState({status: params.status});
    console.log("hh"+params.status);


  }
  render(){
    return(
      <div>
        <div className="panel panel-default">
            <div className="panel-heading">New Employee {this.state.status? <p>index </p> : <p>Wrong </p>}</div>
            <div className="panel-body">
              <div className="NewEmployee">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <FormGroup controlId="firstname">
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      value={this.state.firstname}
                      onChange={this.handleChange.bind(this)} />
                  </FormGroup>
                  <FormGroup controlId="lastname">
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      value={this.state.lastname}
                      onChange={this.handleChange.bind(this)}
                      type="text" />
                  </FormGroup>
                  <FormGroup controlId="gender">
                    <ControlLabel>Gender</ControlLabel>
                    <Radio value="Male" name="gender" onChange={this.setGender.bind(this)} >Male</Radio>
                    <Radio value="FEMALE" name="gender" onChange={this.setGender.bind(this)}>Female</Radio>
                  </FormGroup>
                  <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      value={this.state.email}
                      onChange={this.handleChange.bind(this)}
                      type="email" />
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


export default NewEmployee;
