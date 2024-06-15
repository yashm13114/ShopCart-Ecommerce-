
// import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify'; // Make sure to import toast from react-toastify
// import { Usercontext } from '../App';
// const LogOut = () => {
//     const navigate = useNavigate();
//     const {state, dispatch} = useContext(Usercontext)
//     useEffect(() => {
//         const logoutUser = () => {
//             try {
//                 dispatch({ type: 'USER', payload: false });
//                 // Perform logout actions locally
//                 localStorage.removeItem('user');
//                 navigate('/login');
//                 toast.success('Log Out Successfully', {
//                     position: 'top-right',
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: false,
//                     draggable: true,
//                     progress: undefined,
//                     theme: 'colored',
//                 });
//             } catch (err) {
//                 console.error('Error during logout:', err);
//                 // Handle error gracefully (e.g., show error message to user)
//                 toast.error('Failed to log out', {
//                     position: 'top-right',
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: false,
//                     draggable: true,
//                     progress: undefined,
//                     theme: 'colored',
//                 });
//             }
//         };

//         logoutUser();
//     }, [navigate]); // Only depend on navigate to ensure effect runs once on mount

//     // Render some indication that logout is in progress
//     return (
//         <div>
//             Logging out...
//         </div>
//     );
// };

// export default LogOut;
// pages/Logout.js
import { useEffect, useContext } from "react";
import { UserContext } from "../components/context/UserContext";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        navigate("/login");
    }, [dispatch, navigate]);

    return null;
};

export default LogOut;
