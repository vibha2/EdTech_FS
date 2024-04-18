import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';


const VerifyEmail = () => {

  const { signupData, loading} = useSelector( (state) => state.auth );
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect( () => {
    if(!signupData){
        navigate("/signup");
    }
  }, []);

  const handleOnSubmit = (e)=> {
    e.preventDefault();
    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    } = signupData;

    
    dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate ));

  }


  return (
    <div className='text-white '>
        { loading? (
            <div>
                Loading...
            </div>
        ):
        (
            <div>
                <h1>Verify Email</h1>
                <p>A verification code has been sent to you. Enter the code below</p>
                <form onSubmit={handleOnSubmit} className='text-black'>
                    <OTPInput
                     value={otp}
                     onChange={setOtp}
                     numInputs={6}
                     renderSeparator= {<span>- </span>}
                     renderInput={(props) => <input {...props} />}
                     placeholder='-'
                     className='text-black'
                     />

                    <button type="submit" className='text-white'>
                        Verify Email
                    </button>
                </form>

                <div>
                    <div>
                        <Link to="/login">
                            <p>Back to Login</p>
                        </Link>
                    </div>

                    <button 
                    onClick={()=> dispatch(sendOtp(signupData.email, navigate))}>
                        Resend it
                    </button>

                </div>

            </div>
        )}
    </div>
  )
}

export default VerifyEmail