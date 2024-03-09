import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    })
  }

  
  useEffect(() =>{
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid, email, displayName, photoURL} = user
     dispatch(addUser({uid :uid, email :email, displayName :displayName, photoURL :photoURL}))
     navigate('/browse')
      } else {
     dispatch(removeUser())
     navigate('/')
      }
   })

   //Unsubscribe when component is unmounted
   return () => unSubscribe()
  }, [])

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 '
       src= {LOGO}
       alt="Netflix"/>
      {user && <div className='flex p-2'>
      <button className='py-2 px-4 m-2 rounded bg-purple-800 text-white' >GPT Search</button>
        <img alt="user icon" className='w-12 h-12 m-2 rounded-full'
        src={user?.photoURL} />
        <button onClick={handleSignout} className='font-bold text-red-600' type="button">Sign out</button>
       </div>
}
    </div>
  );
};

export default Header;
