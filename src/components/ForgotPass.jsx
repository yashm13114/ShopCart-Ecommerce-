// import React from 'react'

// export const ForgotPass = () => {
//   return (
//     <div>ForgotPass</div>
//   )
// }
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
export const ForgotPass = () => {
    const { id, token } = useParams();

    const history = useNavigate();

    const [data2, setData] = useState(false);

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const userValid = async () => {
        const res = await fetch(`https://shopcartbackend-lkkk.onrender.com/user/forgotpassword/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()

        if (data.status == 201) {
            console.log("user valid")
        } else {
            history("*")
        }
    }


    const setval = (e) => {
        setPassword(e.target.value)
    }

    const sendpassword = async (e) => {
        e.preventDefault();
    
        if (password === "") {
            toast.error("Password is required!", {
                position: "top-center"
            });
        } else if (password.length < 8) {
            toast.error("Password must be at least 8 characters!");
        } else {
            try {
                const res = await fetch(`https://shopcartbackend-lkkk.onrender.com/user/${id}/${token}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ password })
                });
    
                if (!res.ok) {
                    throw new Error("Password update failed");
                }
    
                const data = await res.json();
    
                if (data.status === 201) {
                    setPassword("");
                    setMessage(true);
                } else {
                    toast.error("Token expired. Generate a new link", {
                        position: "top-center"
                    });
                }
            } catch (error) {
                console.error("Password update error:", error);
                toast.error("Password update failed", {
                    position: "top-center"
                });
            }
        }
    };
    

    useEffect(() => {
        userValid()
        setTimeout(() => {
            setData(true)
        }, 3000)
    }, [])
    return (
        <>
            <section>
                <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
                    <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="text-4xl text-black">Enter your new password</h2>
                            </div>
                        </div>
                        <form>
                        {message ? <p style={{ color: "green", fontWeight: "bold" }}>Password Succesfulyy Update </p> : ""}
                            <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect" />
                            <div className="mt-4 space-y-6">
                                <div className="col-span-full">
                                    <label className="block mb-3 text-sm font-medium text-gray-600"> Password   </label>
                                    <input type="password" value={password} onChange={setval} placeholder="*******" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                </div>
                                {/* <div className="col-span-full">
                                            <label className="block mb-3 text-sm font-medium text-gray-600"> Confirm passord   </label>
                                            <input type="password" placeholder="******" className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
                                        </div> */}

                                <div className="col-span-full">
                                    <button type="submit"  onClick={sendpassword} className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-purple-500 border-purple-600 rounded-full nline-flex hover:bg-transparent hover:border-purple-600 hover:text-purple-500 focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Send   </button>
                                </div>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </>
    )
}
