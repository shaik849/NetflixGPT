import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {



  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () => {
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

  const handleGptSearchClick = () => {
    //Toggle gpt
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row'>
     <Link to="/"><img className='w-44 mx-auto md:mx-0'
       src= {LOGO}
       alt="Netflix"/></Link>
      {user && <div className='flex p-2 justify-center'>
        {showGptSearch && <select className="p-2 m-2 bg-gray-900 rounded-lg text-white" onChange={handleLanguageChange}>
         {SUPPORTED_LANGUAGES.map((language) => <option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>
        }
      <button className='py-2 px-4 m-2 rounded bg-purple-800 text-white' onClick={handleGptSearchClick} >
        {showGptSearch ? "Home" : "Gpt Search"}
      </button>
        <img alt="user icon" className='w-12 h-12 m-2 rounded-full'
        src={user?.photoURL} />
        <button onClick={handleSignOut} className='font-bold text-red-600' type="button">Sign out</button>
       </div>
}
    </div>
  );
};

export default Header;
