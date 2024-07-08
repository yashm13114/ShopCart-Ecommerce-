import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUserName(userData.result.user.name);
        setEmail(userData.result.user.email);
        setMobileNumber(userData.result.user.mobileNumber);
      } catch (error) {
        console.error('Error retrieving user data from localStorage:', error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
        const userData = JSON.parse(localStorage.getItem('user'));
        const userId = userData.result.user._id; // Assuming user ID is available in local storage

        const response = await axios.put(
            `https://shopcartbackend-lkkk.onrender.com/user/update/${userId}`,
            {
                name: userName,
                email: email,
                mobileNumber: mobileNumber,
            }
        );

        console.log('Response from server:', response.data);

        if (response.data.status === 'SUCCESS') {
            // Update local state with new user data
            setUserName(response.data.user.name);
            setEmail(response.data.user.email);
            setMobileNumber(response.data.user.mobileNumber);

            // Update localStorage with updated user data
            const updatedUserData = {
                result: {
                    user: {
                        ...userData.result.user,
                        name: response.data.user.name,
                        email: response.data.user.email,
                        mobileNumber: response.data.user.mobileNumber,
                    }
                }
            };
            localStorage.setItem('user', JSON.stringify(updatedUserData));

            // Set success message
            setMessage(response.data.message);
        } else {
            setMessage('Failed to update user data');
        }
    } catch (error) {
        console.error('Error updating user data:', error);
        setMessage('Error updating user data');
    }
};


  
  

  return (
    <div className="min-h-screen bg-white lg:p-10 p-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center md:flex-row">
          {/* <div className="w-full md:w-1/4 bg-gray-100 dark:bg-zinc-800 shadow-md rounded-md p-4">
            <ul className="space-y-4">
              <li className="text-blue-500 font-bold">My details</li>
              <li className="text-zinc-600 dark:text-zinc-400">My orders</li>
            </ul>
          </div> */}
          <div className="w-full grid ju md:w-3/4 bg-gray-100 dark:bg-zinc-800 shadow-md rounded-md p-6 ml-0 md:ml-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-6">My Account</h2>
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">Personal Information</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">Update your personal details below.</p>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-300">Name</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md dark:bg-zinc-700 dark:text-zinc-200"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-300">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md dark:bg-zinc-700 dark:text-zinc-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-zinc-700 dark:text-zinc-300">Phone Number</label>
                    <input
                      type="text"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md dark:bg-zinc-700 dark:text-zinc-200"
                    />
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Keep 9-digit format with no spaces and dashes.</p>
                  </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
              </form>
              {message && <p className="mt-4 text-zinc-700 dark:text-zinc-300">{message}</p>}
            </div>
            <div className="p-4">
              <h2 className="text-zinc-600 dark:text-zinc-400 mb-4">Delivery addresses</h2>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg shadow-sm w-full md:w-auto">
                  <img src="https://placehold.co/40x40" alt="location" className="w-10 h-10 rounded-full mr-4" />
                  <div className="flex-1">
                    <p className="text-zinc-800 dark:text-zinc-200">Tashkent city, Street name, Building 123, House 321</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">(Primary address)</p>
                  </div>
                  <button className="ml-4 text-zinc-600 dark:text-zinc-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0-5c.828 0 1.5-.672 1.5-1.5S12.828 8.5 12 8.5 10.5 9.172 10.5 10s.672 1.5 1.5 1.5zm0-5c.828 0 1.5-.672 1.5-1.5S12.828 3.5 12 3.5 10.5 4.172 10.5 5s.672 1.5 1.5 1.5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="flex items-center mt-4 text-blue-600 dark:text-blue-400">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 5v14m7-7H5" />
                </svg>
                Add new address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
