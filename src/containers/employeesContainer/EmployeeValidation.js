const export function handleValidation(){
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
