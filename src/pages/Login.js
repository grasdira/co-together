import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="text-center m-5">
      <button
        className="bg-accent-500 p-2 hover:bg-accent-600 login-with-google-btn"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
