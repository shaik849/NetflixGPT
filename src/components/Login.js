import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignForm] = useState(true)
  const email = useRef(null)
  const name = useRef(null)
  const password = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)

  function toggleSignInForm() {
    setIsSignForm(!isSignInForm);
  }

  function handleButtonClick() {
    //validation form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return;
    //sign in sign up
    if (!isSignInForm) {
      //sign up

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth?.currentUser
            dispatch(addUser({uid :uid, email :email, displayName :displayName, photoURL :photoURL}))
          }).catch((error) => {
            setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode)
        });
    }
    else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const {uid, email, displayName, photoURL} =  userCredential?.user;
          dispatch(addUser({uid :uid, email :email, displayName :displayName, photoURL :photoURL}))
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode)
        })
    }

  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='h-screen object-cover md:h-full'
        src={BG_URL}
          alt="Netflix"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 w-10/12 md:w-3/12 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder='Full name' className='p-3 my-4 w-full rounded-lg bg-gray-800' />}
        <input ref={email} type="text" placeholder='Email Address' className='p-3 my-4 w-full rounded-lg bg-gray-800' />
        <input ref={password} type="password" placeholder="password" className='p-3 my-4 w-full rounded-lg bg-gray-800' />
        <p className='text-red-500 font-bold py-2'>{errorMessage}</p>
        <button className='p-3 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now." : "Already register? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
