// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { FaEye } from "react-icons/fa";
// import { IoIosEyeOff } from "react-icons/io";
// // auth and redux
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const validationSchema = yup.object({
//     name: yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid name format').required('Name is required'),
//     email: yup.string().email('Invalid email format').required('Email is required'),
//     mobileNumber: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile number is required'),
//     password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
//     confirmPassword: yup.string()
//         .oneOf([yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm password is required'),
// });

// export const SignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [message, setMessage] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             mobileNumber: '',
//             password: '',
//             confirmPassword: '',
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values, { setSubmitting, setFieldError }) => {
//             console.log('Form data', values);
//             handleSignup(values, navigate, setFieldError, setSubmitting, dispatch, setMessage);
//         },
//     });

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleSignup = async (values, navigate, setFieldError, setSubmitting, dispatch, setMessage) => {
//         try {
//             const response = await fetch("http://localhost:5000/user/signup", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(values)
//             });
//             const data = await response.json();

//             if (data.status === "FAILED") {
//                 const { message } = data;
//                 if (message.includes("name")) {
//                     setFieldError("name", message);
//                 } else if (message.includes("email")) {
//                     setFieldError("email", message);
//                 } else if (message.includes("mobileNumber")) {
//                     setFieldError("mobileNumber", message);
//                 } else if (message.includes("password")) {
//                     setFieldError("password", message);
//                 }
//                 setSubmitting(false);
//             } else if (data.status === "PENDING") {
//                 setMessage('Verification link is sent to your email, please verify your email.');
//                 setSubmitting(false);
//             }
//         } catch (error) {
//             console.log("Request error:", error);
//             setSubmitting(false);
//         }
//     };

//     return (
//         <>
//             <div className='grid justify-center'>
//                 <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
//                     <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
//                         Welcome back to <span className="text-[#7747ff]">App</span>
//                     </div>
//                     <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
//                         Log in to your account
//                     </div>
//                     {message && (
//                         <div className="bg-green-200 text-green-700 p-2 rounded mb-4 text-center">
//                             {message}
//                         </div>
//                     )}
//                     <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
//                         <div className="block relative">
//                             <label htmlFor="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
//                                 Full name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//                                 value={formik.values.name}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                             />
//                             {formik.touched.name && formik.errors.name ? (
//                                 <div className="text-red-500 text-sm">{formik.errors.name}</div>
//                             ) : null}
//                         </div>
//                         <div className="block relative">
//                             <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
//                                 Email
//                             </label>
//                             <input
//                                 type="text"
//                                 id="email"
//                                 name="email"
//                                 className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//                                 value={formik.values.email}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                             />
//                             {formik.touched.email && formik.errors.email ? (
//                                 <div className="text-red-500 text-sm">{formik.errors.email}</div>
//                             ) : null}
//                         </div>
//                         <div className="block relative">
//                             <label htmlFor="mobileNumber" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
//                                 Mobile Number
//                             </label>
//                             <input
//                                 type="text"
//                                 id="mobileNumber"
//                                 name="mobileNumber"
//                                 className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//                                 value={formik.values.mobileNumber}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                             />
//                             {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
//                                 <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
//                             ) : null}
//                         </div>
//                         <div className="block relative">
//                             <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
//                                 Password
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     id="password"
//                                     name="password"
//                                     className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//                                     value={formik.values.password}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={togglePasswordVisibility}
//                                     className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-[140%] font-normal mb-2 text-gray-600"
//                                 >
//                                     {showPassword ? <IoIosEyeOff className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                                 </button>
//                             </div>
//                             {formik.touched.password && formik.errors.password ? (
//                                 <div className="text-red-500 text-sm">{formik.errors.password}</div>
//                             ) : null}
//                         </div>
//                         <div className="block relative">
//                             <label htmlFor="confirmPassword" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
//                                 Confirm Password
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     id="confirmPassword"
//                                     name="confirmPassword"
//                                     className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
//                                     value={formik.values.confirmPassword}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={togglePasswordVisibility}
//                                     className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-[140%] font-normal mb-2 text-gray-600"
//                                 >
//                                     {showPassword ? <IoIosEyeOff className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                                 </button>
//                             </div>
//                             {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//                                 <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
//                             ) : null}
//                         </div>
//                         <div>
//                             <a className="text-sm text-[#7747ff]" href="#">
//                                 Forgot your password?
//                             </a>
//                         </div>
//                         <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
//                             Submit
//                         </button>
//                     </form>
//                     <div className="text-sm text-center mt-[1.6rem]">
//                         Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
// auth and redux
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const validationSchema = yup.object({
    name: yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid name format').required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    mobileNumber: yup.string().matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits').required('Mobile number is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
});

export const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobileNumber: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, setFieldError }) => {
            handleSignup(values, navigate, setFieldError, setSubmitting, dispatch, setMessage);
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async (values, navigate, setFieldError, setSubmitting, dispatch, setMessage) => {
        try {
            const response = await fetch("https://shopcartbackend-lkkk.onrender.com/user/signup", {
                // const response = await fetch("http://localhost:5000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();

            if (data.status === "FAILED") {
                const { message } = data;
                if (message.includes("name")) {
                    setFieldError("name", message);
                } else if (message.includes("email")) {
                    setFieldError("email", message);
                } else if (message.includes("mobileNumber")) {
                    setFieldError("mobileNumber", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                }
                setSubmitting(false);
            } else if (data.status === "PENDING") {
                setMessage('Verification link is sent to your email, please verify your email.');
                setSubmitting(false);
            }
        } catch (error) {
            console.log("Request error:", error);
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className='grid justify-center'>
                <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
                    <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
                      Create your<span className="text-[#7747ff]"> Account</span>
                    </div>
                   
                    {message && (
                        <div className="bg-green-200 text-green-700 p-2 rounded mb-4 text-center">
                            {message}
                        </div>
                    )}
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                        <div className="block relative">
                            <label htmlFor="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-sm">{formik.errors.name}</div>
                            ) : null}
                        </div>
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
                            <label htmlFor="mobileNumber" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                id="mobileNumber"
                                name="mobileNumber"
                                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                                value={formik.values.mobileNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
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
                        <div className="block relative">
                            <label htmlFor="confirmPassword" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                                    value={formik.values.confirmPassword}
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
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                            ) : null}
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
                        Already have have an account? <NavLink className="text-sm text-[#7747ff]" to={"/login"}>Login!</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
