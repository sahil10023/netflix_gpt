import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handelSignOut = () => {
        signOut(auth)
        .catch((err)=>{
            console.log(err);
            alert('Error signing out');
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(loginUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            } else {
                dispatch(logoutUser());
                navigate('/');
            }
        });
    }, [])
    return (
        <div className='absolute flex justify-between items-center w-full px-8 py-2 bg-gradient-to-b from-black'>
            <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='Netflix Logo' />
            <div className='flex items-center w-32 justify-between'>
                {user && <><img className='w-12' src={user.photoURL} alt="User Icon" />
                    <button onClick={handelSignOut} className='text-white font-bold'>Sign Out</button></>}
            </div>
        </div>
    )
}

export default Header