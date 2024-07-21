import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../utils/firebase.config'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <div className='w-full bg-white'>
      <ToastContainer />
      {/* Different Product by Categories */}
      <div className='border-t-2 h-14 border-[#cecede] rounded-sm'>
        <div className='flex item-center cursor-pointer justify-center gap-2 xl:gap-14 mt-3 '>
          <div className='w-0.5 h-8 font bg-[#cecede] rounded-sm'></div>

          <Link to={"/Product"}>
            <span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Women</span>
          </Link>
          <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

          <Link to={"/Product"}>
            <span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Men</span>
          </Link>
          <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

          <Link to={"/Product"}>
            <span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Electronics</span>
          </Link>
          <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

          <Link to={"/Product"}>
            <span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Jewellery</span>
          </Link>
          <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>

          <Link to={"/Product"}>
            <span className='font-base text-base xl:text-lg hover:text-[#98208e] hover:border-b-2 hover:border-[#98208e]'>Furniture</span>
          </Link>
          <div className='w-0.5 h-8 bg-[#cecede] rounded-sm'></div>
        </div>
      </div>
      <div className='border-t-2 border-[#cecede] rounded-sm'></div>

      {/* Conditionally render logout button */}
      {user && (
        <div className='flex justify-end p-4'>
          <button
            onClick={handleLogout}
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
