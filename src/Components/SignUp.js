import React, {useState , useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './Toastify';
import styles from './signUp.module.css'

const SignUp = () => {
    const [errors , setErrors] = useState({})
    const [touched ,setTouched] = useState({})        
    const [data , setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isChecked : false
    });


    const changHandler = event => {
        if(event.target.name === "isChecked"){
            setData({ ...data, [event.target.name]: [event.target.checked]})
        }else {
            setData( { ...data, [event.target.name]: [event.target.value]} )
        }
    }


    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {

        notify("you sign up successfully", "success");

        }else {
            notify("Invalid Data!" , "error");
            
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isChecked: true,
            })
              
        }
    }

    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])  
 

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.fromContainer}>
                <h2 className={styles.header}>SignUp</h2>
        <div className={styles.filed}>
            <label>Name</label>
            <input
            className={(errors.name && touched.name) ? styles.unCompleted :  styles.completed }
            type='text' 
            name='name' 
            value={data.name} 
            onChange={changHandler} 
            onFocus={focusHandler}/>
            {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.filed}>
            <label>Email</label>
            <input className={(errors.email && touched.email) ? styles.unCompleted :  styles.completed }
              type='text' name='email' value={data.email} onChange={changHandler} onFocus={focusHandler}/>
            {errors.email && touched.email && <span>{errors.email}</span>}
        </div> 
        <div className={styles.filed}>
            <label>Password</label>
            <input className={(errors.password && touched.password) ? styles.unCompleted :  styles.completed }
             type='password' name='password' value={data.password} onChange={changHandler} onFocus={focusHandler}/>
            {errors.password && touched.password && <span>{errors.password}</span>}
        </div> 
        <div className={styles.filed}>
            <label>Confirm Password</label>
            <input  className={(errors.confirmPassword && touched.confirmPassword) ? styles.unCompleted :  styles.completed }
             type='password' name='confirmPassword' value={data.confirmPassword} onChange={changHandler} onFocus={focusHandler}/>
            {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <div className={styles.filed}>
            <label className={styles.policyText}>I Accept The Privet Policy</label>
            <input type='checkbox' name='isChecked' value={data.isChecked} onChange={changHandler} onFocus={focusHandler}/>
            {errors.isChecked && touched.isChecked && <span>{errors.isChecked}</span>}
        </div>
          <div className={styles.btns}>
            <a href='#'>LOGIN</a>
            <button type='submit'>SIGN UP</button>
            </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;