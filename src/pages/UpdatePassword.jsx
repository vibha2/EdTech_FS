import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword:"",
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPasword, setShowConfirmPasword ] = useState(false);
    const {loading} = useSelector((state) => state.auth);
    const {password, confirmPassword} = formData;

    const handleOnchange = (e) => {
        setFormData( (prevdata) => (
            {
                ...prevdata,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate));
    }

  return (
    <div className='text-white flex justify-center items-center'>
    {
        loading ? (
            <div>Loading...</div>
        )
        :
        (
            <div>
                <h1>Choose new password</h1>
                <p>Almost done. Enter your new password and youre all set.</p>
                <form onSubmit={handleOnSubmit}>
                    <label>
                        <p>New password*</p>
                        <input
                            required
                            type={showPassword ? "text": "password"}
                            name='password'
                            value={password}
                            onChange={handleOnchange}
                            placeholder='Password'
                            className='w-full p-6 bg-richblack-600 text-richblack-5'
                        />
                        <span 
                        onClick={() => setShowPassword((prev) => !prev )}
                        >
                            {
                                showPassword 
                                ? <AiFillEyeInvisible fontSize={24} /> 
                                : <AiFillEye fontSize={24} />
                            }
                        </span>
                    </label>

                    <label>
                        <p>Confirm New Password*</p>
                        <input
                            required
                            type={showConfirmPasword ? "text": "password"}
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={handleOnchange}
                            placeholder='Confirm Password'
                            className='w-full p-6 bg-richblack-600 text-richblack-5'
                        />
                        <span 
                        onClick={() => setShowConfirmPasword((prev) => !prev )}
                        >
                            {
                                showConfirmPasword 
                                ? <AiFillEyeInvisible fontSize={24} /> 
                                : <AiFillEye fontSize={24} />
                            }
                        </span>
                    </label>

                    <button type='submit'>
                            Reset Password
                    </button>
                </form>

                <div>
                 <Link to="/login">
                        <p>Back to Login</p>
                 </Link>
                </div>

            </div>
        )
    }

    </div>
  )
}

export default UpdatePassword