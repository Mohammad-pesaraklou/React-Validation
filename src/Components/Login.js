import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validate } from './validate';
import { notify } from './Toastify';
import styles from './signUp.module.css'

const SignUp = () => {
    const [errors , setErrors] = useState({})
    const [touched ,setTouched] = useState({})        
    const [data , setData] = useState({
        email : "",
        password : "",
      
    });


    const changHandler = event => {
            setData( { ...data, [event.target.name]: [event.target.value]} )
    }


    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {

        notify("you Log in successfully", "success");

        }else {
            notify("Invalid Data!" , "error");
            
            setTouched({
                email: true,
                password: true,
       
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
    
          <div className={styles.btns}>
            <Link to='/signup'>SIGN UP</Link>
            <button type='submit'>Log in</button>
            </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;