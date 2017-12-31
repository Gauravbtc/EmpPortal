import React, { Component } from 'react';
import EmpImport from './EmpImport';


class EmployeeImport extends Component{
  submit = (values) => {
    let formData = new FormData();
    for(const key in values){
      if(key === 'file'){
        formData.append(key,values[key][0])
      }
    }

    
    this.props.importEmployee(formData);
  }

 render(){
   const { employee_created, employeee_erros,error,loading,success} = this.props.importEmp;
  if(loading) {
    return <div className="container"><h1>Employees</h1><h3>Creating...</h3></div>
  } else if(error) {
    return <div className="alert alert-danger">Error: {error.message}</div>
  }
  return(
    <div>
      <EmpImport onSubmit= {this.submit} />
    </div>
  );
}

}
export default EmployeeImport;