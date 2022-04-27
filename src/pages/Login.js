import React from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// todo 1. 好看的ui 2. 訪客功能(資料存在local storage)
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
    <div className="text-center m-5 flex flex-col w-60 mx-auto">
      <button
        className="bg-accent-500 p-2 hover:bg-accent-600 login-with-google-btn mb-3"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
      <button className="bg-accent-600 p-2 hover:bg-accent-700 mb-3">
        guest mode
      </button>
    </div>
  );
}

export default Login;
