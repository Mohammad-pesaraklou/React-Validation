export const validate = data => {
    
    const errors = {};

    if(!data.name) {
        errors.name = "The name is required"
    } else{
        delete errors.name
    }
 
    if(!data.email) {
        errors.email = "Email is Required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Please enter the Valid Email"
    }else {
        delete errors.email
    }

    if(!data.password){
     errors.password = "Password is required"
    }else if(data.password.length > 6){
        errors.password = "Your password needs to be 6 charecter ot more!"
    }else{
        delete errors.password
    }

   if(!data.confirmPassword){
    errors.confirmPassword = "Please confirm the password"
   }else if(data.confirmPassword === data.password){
        delete errors.confirmPassword
    }else{
       delete errors.confirmPassword
   }

    if(data.isChecked){
        delete errors.isChecked
    }else{
        errors.isChecked = "Accept our regulation"
    }

    return errors;
};
