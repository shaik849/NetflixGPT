import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true)
 

  function toggleSignInForm(){
     setIsSignForm(!isSignInForm); 
  }
  
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Netflix"
      />
      </div>
      <form className='absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 w-3/12 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full name' className='p-3 my-4 w-full rounded-lg bg-gray-800' />}
        <input type="text" placeholder='Email Address' className='p-3 my-4 w-full rounded-lg bg-gray-800' />
        <input type="password" placeholder="password" className='p-3 my-4 w-full rounded-lg bg-gray-800' />
        <button className='p-3 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." :  "Already register? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
