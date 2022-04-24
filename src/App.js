import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //document: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import Login from "./pages/Login";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Project from "./pages/Project";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <div className="2xl:container mx-auto">
      <header className="flex flex-row sm:justify-between items-center h-auto p-2 bg-primary-600 text-gray-100 text-center">
        <div className="2xl:basis-1/6 md:basis-1/4">
          <Link to="/">LogoImg</Link>
        </div>
        <div className="2xl:basis-2/3 md:basis-1/2">
          <nav className="flex flex-row px-10">
            {isAuth ? (
              <React.Fragment>
                <Link
                  className="2xl:basis-1/6 lg:basis-1/3 md:basis-1/2 px-5 py-2 hover:bg-primary-500 focus:bg-primary-500"
                  to="/project"
                >
                  專案<small className="ml-1">Projects</small>
                </Link>

                <Link
                  className="2xl:basis-1/6 lg:basis-1/3 md:basis-1/2 px-5 py-2 hover:bg-primary-500 focus:bg-primary-500"
                  to="/report"
                >
                  今日總計<small className="ml-1">Report</small>
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </nav>
        </div>
        <div className="2xl:basis-1/6 md:basis-1/4">
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={signUserOut}>Log out</button>
          )}
        </div>
      </header>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/project" element={<Project />} />
        <Route path="/report" element={<Report />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
