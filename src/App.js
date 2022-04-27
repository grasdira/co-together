import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //document: https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import Login from "./pages/Login";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Project from "./pages/Project";
import Setting from "./pages/Setting";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// todo *header* logoImg user-avatars; *html整理*
function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location = "/";
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
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="rounded-full inline-flex justify-center w-full border focus:border-primary-400 shadow-sm px-4 py-4 bg-primary-600"></Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/setting"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Setting
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={signUserOut}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm w-full"
                          )}
                        >
                          Log out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </header>
      <Routes basename="/co-together">
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/project" element={<Project />} />
        <Route path="/report" element={<Report />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
