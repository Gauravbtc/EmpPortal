import React ,{ Component } from 'react'
class ConfirmationMessage extends Component{
  render(){
    return(
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Confirmation</div>
          <div className="panel-body">
            <h3>Please check your mail </h3>
          </div>
        </div> 
      </div>
    )
  }
}

export default ConfirmationMessage;
