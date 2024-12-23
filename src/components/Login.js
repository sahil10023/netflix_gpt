import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { loginUser } from '../utils/userSlice';
import { AVATAR_URL, Netflix_BG } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = isSignInForm
      ? validateFormData({ email: email.current.value, password: password.current.value })
      : validateFormData({
        email: email.current.value,
        password: password.current.value,
        username: username.current.value,
      });
    setErrorMessage(result);
    if (result) return;
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(loginUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error creating user', error);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(loginUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error signing in', error);
          setErrorMessage(errorMessage + errorCode);
        });
    }
  };

  return (
    <>
      <div className="absolute inset-0 z-[-1]">
        <Header />
        <img
          src={Netflix_BG}
          alt="Netflix Background"
          className="h-full w-full object-cover"
        />
      </div>
      <form
        className="w-[300px] sm:w-6/12 md:w-5/12 lg:w-3/12 p-6 sm:p-12 my-10 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white absolute bg-[rgba(0,0,0,0.8)] rounded-md shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-bold pb-6">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={username}
            type="text"
            placeholder="Username"
            className="px-4 py-3 w-full border border-gray-400 bg-transparent rounded-md mb-4 focus:outline-none focus:border-white"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className="px-4 py-3 w-full border border-gray-400 bg-transparent rounded-md mb-4 focus:outline-none focus:border-white"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="px-4 py-3 w-full border border-gray-400 bg-transparent rounded-md focus:outline-none focus:border-white"
        />
        {errorMessage && (
          <p className="py-4 text-[rgba(255,0,0,0.7)]">{errorMessage}</p>
        )}
        <button
          onClick={handleSubmit}
          className="h-10 my-6 w-full bg-red-700 text-white rounded-md hover:bg-red-800 transition-all"
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="text-[rgba(255,255,255,0.7)] text-sm sm:text-base">
          {isSignInForm ? 'New to Netflix?' : 'Already registered?'}{' '}
          <span
            className="text-white font-bold hover:cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? 'Sign Up' : 'Sign In'} now
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
