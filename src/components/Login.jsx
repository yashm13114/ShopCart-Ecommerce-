
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { loginUser } from '../auth/actions/userActions'; 
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
      const {state, dispatch} = useContext(UserContext)
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            console.log('Form data', values);
            loginUser(values, navigate, setFieldError, setSubmitting, dispatch);
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='grid justify-center'>
            <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                    Welcome back to <span className="text-[#7747ff]">Website</span>
                </div>
                <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
                    Log in to your account
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                    <div className="block relative">
                        <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="block relative">
                        <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-[140%] font-normal mb-2 text-gray-600"
                            >
                                {showPassword ? <IoIosEyeOff className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div>
                        <NavLink className="text-sm text-[#7747ff]" to={"/password-reset"}>
                            Forgot your password?
                        </NavLink>
                    </div>
                    <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
                        Submit
                    </button>
                </form>
                {formik.isSubmitting && (
                    <div className="loader-overlay">
                        <div className="loader">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                )}
                <div className="text-sm text-center mt-[1.6rem]">
                    Don’t have an account yet? <NavLink className="text-sm text-[#7747ff]" to={"/signup"}>Sign up for free!</NavLink>
                </div>
            </div>
        </div>
    );
};


