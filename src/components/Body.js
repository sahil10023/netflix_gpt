import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { loginUser, logoutUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {path: '/', element: <Login/>},
        {path: '/browse', element: <Browse />},
        // Add more routes as needed...
        // {path: '/path', component: Component},
        //...
    ]);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(loginUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
            }else{
                dispatch(logoutUser());
            }
        });
    },[])
    return (<>
        <RouterProvider router={appRouter}/>
    </>
    )
}

export default Body