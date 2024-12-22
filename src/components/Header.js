import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Netflix_LOGO } from '../utils/constants';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handelSignOut = () => {
        signOut(auth)
            .catch((err) => {
                console.log(err);
                alert('Error signing out');
            })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(loginUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            } else {
                dispatch(logoutUser());
                navigate('/');
            }
        });

        return () => unSubscribe(); 
    }, [])
    return (
        <div className='absolute z-20 flex justify-between items-center w-full px-8 py-2 bg-gradient-to-b from-black'>
            <img className='w-48 py-4' src={Netflix_LOGO}
                alt='Netflix Logo' />

            {!user && (
                <div className="w-96 my-4 bg-red-600 text-white font-bold text-center overflow-hidden">

                    This is a personal project for learning purposes only and is not affiliated with or endorsed by Netflix.

                </div>
            )}
            {user && <div className='flex items-center w-32 justify-between'><img className='w-12 rounded-md' src={user.photoURL} alt="User Icon" />
                <button onClick={handelSignOut} className='text-white font-bold'>Sign Out</button></div>}
        </div>
    )
}

export default Header