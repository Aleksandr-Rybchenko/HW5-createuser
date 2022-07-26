
const createNewUser=() => {
    let firstName= prompt("name?");
    let lastName = prompt("Lastname?");

   let getName;
   let getLastName;
   newUser={
    firstName: {
        value:firstName,
        writable : false
    },
    lastName:{
        value:lastName,
        writable : false
    },
    getLogin: function(){
        getName = this.firstName.value[0];
        getLastName = this.lastName.value;
        initials = getName+getLastName;
        alert(`Your initials - ${initials.toLowerCase()}`)
    }
   }
   return newUser.getLogin();
}
createNewUser();




