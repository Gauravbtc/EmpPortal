const employee = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EMP':
      //return console.log("Gaurav");
        //alert("HH"+ ...state);
        alert("kk"+ action.params.firstname);
        // state.params = action.params;
         //alert("hh"+ state.params.);
        // //console.log("hhh"+ action.params.firstname);
        break;
    case 'EDIT_EMP':
        alert("Emp edit");
        break;
        // ...state,
        // {
        //   id: action.id,
        //   text: action.text,
        //   completed: false
        // }
    default:
      return state
}
}


export default employee
