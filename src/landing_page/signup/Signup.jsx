import React, { useEffect } from 'react';

function Signup() {
  useEffect(() => {
    window.location.href = 'https://zerodha-signup.onrender.com'; 
  }, []);

  return <h1>Wait, redirecting to Signup...</h1>;
}

export default Signup;
