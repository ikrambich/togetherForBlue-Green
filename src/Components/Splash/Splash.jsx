import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loading from "../../assets/loading.gif"


import "./Splash.css"

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/home'); // 🔁 change to your main page route
        }, 4000); // 3 seconds delay

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);
  return (
    <div className='splash-screen'>
        <img className='splashBackground' src={loading}></img>


    </div>
  )
}

export default Splash
