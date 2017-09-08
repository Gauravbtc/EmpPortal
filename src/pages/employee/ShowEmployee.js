import React, {Component} from 'react';
import ShowEmployeeContainer from '../../containers/employeesContainer/ShowEmployeeContainer';

class ShowEmployee extends Component{
  render(){
    return(
      <div>
        <ShowEmployeeContainer employeeId= {this.props.match.params.id} />
      </div>
    )
  }
}

export default ShowEmployee;
