import React from 'react';


const SignUp = () => {

    
    return (
        <div>
            <form>
        <div>
            <label>Name:</label>
            <input type='text' name='name'/>
        </div>
        <div>
            <label>Email:</label>
            <input type='text' name='email'/>
        </div> 
        <div>
            <label>Password:</label>
            <input type='text' name='Password'/>
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type='text' name='confirmPassword'/>
        </div>
        <div>
            <label>I Accept The Privet Policy :</label>
            <input type='checkbox' name='name'/>
        </div>


            </form>
        </div>
    );
};

export default SignUp;