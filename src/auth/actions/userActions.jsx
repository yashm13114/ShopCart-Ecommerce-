import axios from "axios";
import { sessionService } from "redux-react-session";
import { useContext } from "react"; 
export const loginUser = (credentials, navigate, setFieldError, setSubmitting, dispatch) => {
    axios.post("https://shopcartbackend-lkkk.onrender.com/user/signin", credentials, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        const { data } = response;
       
        if (data.status === "FAILED") {
            const { message } = data;
            if (message.includes("credentials")) {
                setFieldError("email", message);
                setFieldError("password", message);
            } else if (message.includes("password")) {
                setFieldError("password", message);
            }
            setSubmitting(false);
        } else if (data.status === "SUCCESS") {
            // Save the entire response data in localStorage
            try {
                localStorage.setItem('user', JSON.stringify(data));
                console.log('User data saved to localStorage:', data);
            } catch (storageError) {
                console.error('Error saving to localStorage:', storageError);
            }

            // Update Redux store with user authentication state if needed
            dispatch({ type: 'LOGIN', payload: data });

            // Show success message in an alert
            alert(data.message);

            // Navigate to the home page
            navigate('/');

            setSubmitting(false);
        }
    }).catch((error) => {
        console.log("Request error:", error);
        // complete submission
        setSubmitting(false);
    });
};
// export const loginUser = (credentials, navigate, setFieldError, setSubmitting, dispatch) => {
//     //  const {state, dispatch} = useContext(Usercontext)
//     // axios.post("http://localhost:5000/user/signin", credentials, {
//     axios.post("http://localhost:5000/user/signin", credentials, {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then((response) => {
//         console.log('Full server response:', response); // Log the entire response
//         const { data } = response;
//         console.log('Data:', data); // Log the data part of the response
       
//         if (data.status === "FAILED") {
//             const { message } = data;
//             if (message.includes("credentials")) {
//                 setFieldError("email", message);
//                 setFieldError("password", message);
//             } else if (message.includes("password")) {
//                 setFieldError("password", message);
//             }
//             setSubmitting(false);
//         } else if (data.status === "SUCCESS") {
//             // Log the data structure to verify
//             console.log('Success data structure:', data);

//             // Assuming the user data is in `data.result.user`
//             const userData = data.user; // Fallback to an empty object if user data is not provided
//             console.log('User Data:', userData); // Log the user data

//             // Save user data in localStorage, even if it's empty, to prevent further issues
//             try {
//                 localStorage.setItem('user', JSON.stringify(userData));
//                 console.log('User data saved to localStorage');
//             } catch (storageError) {
//                 console.error('Error saving to localStorage:', storageError);
//             }

//             // Show success message in an alert
//             alert(data.message);
           
//             // Update Redux store with user authentication state
//             dispatch({ type: 'LOGIN', payload: userData });
//             dispatch({ type: 'USER', payload: true });
//             // Navigate to the home page
//             navigate('/');

//             setSubmitting(false);
//         }
//     }).catch((error) => {
//         console.log("Request error:", error);
//         // complete submission
//         setSubmitting(false);
//     });
// };

export const signupUser = async (credentials, navigate, setFieldError, setSubmitting) => {
    try {
        const response = await fetch("https://shopcartbackend-lkkk.onrender.com/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();

        if (data.status === "FAILED") {
            const { message } = data;
            if (message.includes("name")) {
                setFieldError("name", message);
            } else if (message.includes("email")) {
                setFieldError("email", message);
            } else if (message.includes("mobilenumber")) {
                setFieldError("mobilenumber", message);
            } else if (message.includes("password")) {
                setFieldError("password", message);
            }
            if (typeof setSubmitting === 'function') {
                setSubmitting(false);
            } else {
                console.error('setSubmitting is not a function or is undefined:', setSubmitting);
            }
        } else if (data.status === "SUCCESS") {
            alert(data.message); // Show success message in an alert
            navigate('/login'); // Navigate to the login page
            if (typeof setSubmitting === 'function') {
                setSubmitting(false);
            } else {
                console.error('setSubmitting is not a function or is undefined:', setSubmitting);
            }
        }
    } catch (error) {
        console.log("Request error:", error);
        if (typeof setSubmitting === 'function') {
            setSubmitting(false);
        } else {
            console.error('setSubmitting is not a function or is undefined:', setSubmitting);
        }
    }
};

export const logoutUser = (navigate) => {
    // Implement logout functionality if needed
    sessionService.deleteSession();
    sessionService.deleteUser();
    localStorage.removeItem("user");
    navigate("/");
};
