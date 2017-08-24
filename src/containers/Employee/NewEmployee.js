import React, { Component } from 'react';
import './NewEmployee.css';
import { FormGroup,FormControl,ControlLabel,Button,Radio} from 'react-bootstrap';



class NewEmployee extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gender: ''
    };
  }

  handleChange(event){
    //alert("ad"+ this.state.gender);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  setGender(event) {
    console.log(event.target.name);
    //alert(event.target.name);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("HH"+ this.state.gender);
  }
  render(){
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
                    <Radio value="Male" name="gender" onChange={this.handleChange.bind(this)} >Male</Radio>
                    <Radio value="FEMALE" name="gender" onChange={this.handleChange.bind(this)}>Female</Radio>
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
