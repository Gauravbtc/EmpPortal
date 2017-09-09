import React, {Component} from 'react';
import EditEmployeeContainer from '../../containers/employeesContainer/EditEmployeeContainer';

class EditEmployee extends Component{
  render(){
    return(
      <div>
        <EditEmployeeContainer employeeId= {this.props.match.params.id} />
      </div>
    )
  }
}

export default EditEmployee;
