import React ,{ Component } from 'react'
import  EmpForm from '../../components/employees/EmpForm';

class EmpFormPage extends Component{
  submit = (values) => {
  }

  constructor(props) {
    super(props);
    this.state = {
    emp: {
     firstName: 'gaurav',
     lastName: 'Makwana',
     email: 'gv@gmail.com',
   }
 }
 }


  render(){
    return(
        <EmpForm onSubmit= {this.submit} initialValues={this.state.emp} />
    )
  }
}


export default EmpFormPage;
