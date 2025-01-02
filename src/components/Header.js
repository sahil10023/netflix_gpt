import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Netflix_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { setLanguage } from '../utils/configSlice';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const onGPTPage = useSelector((store) => store.gpt.showGptSearch);
    const handelSignOut = () => {
        signOut(auth)
            .catch((err) => {
                console.log(err);
                alert('Error signing out');
            })
    };
    const handelOnGptClick = () => {
        dispatch(toggleGptSearchView());
    };
    const handelLogoClick = () => {
        dispatch(toggleGptSearchView());
    }
    const handelLangaugeChange = (e) => {
        dispatch(setLanguage(e.target.value));
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
    }, []);
    return (
        <div className='absolute z-20 flex justify-between items-center w-full px-8 py-2 bg-gradient-to-b from-black flex-col md:flex-row'>

            <img className='w-48 py-4' src={Netflix_LOGO}
                alt='Netflix Logo' onClick={handelLogoClick} />
            {user && <div className={`flex items-center w-full md:w-auto ${onGPTPage ? " md:w-[21rem]" : "gap-3"} justify-between`}>
                {onGPTPage && <select className='p-2 m-2 bg-gray-800 text-white rounded-md' onChange={handelLangaugeChange}>
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}F
                </select>}
                <button className='py-2 px-4 m-2  bg-purple-800 text-white rounded-md' onClick={handelOnGptClick}>{onGPTPage ? "Home" : "GPT Search"}</button>
                <div className='flex'>
                    <img className='w-12 rounded-md mr-2' src={user.photoURL} alt="User Icon" />
                    <button onClick={handelSignOut} className='text-white font-bold'>Sign Out</button>
                </div>
            </div>}
        </div>
    )
}

export default Header