import React ,{ Component } from 'react'


class Confirmation extends Component{

  componentWillMount() {
    this.props.userConfirmation(this.props.match.params.query1);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginUser.success){
       this.props.history.push('/');
    }
  }

  render(){
    const { user, loading, error,success} = this.props.loginUser;
    if(loading) {
      return <div className="container"><h1>Logging</h1></div>
    }

    return(
      <div>
      </div>
    )
  }
}

export default Confirmation;