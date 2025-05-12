import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
export const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <main className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-4 font-inter">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-700 p-1">
              <button
                className={`px-4 py-2 rounded-md text-sm font-montserrat transition-all ${isSignIn ? "bg-yellow-400 text-gray-900" : "text-gray-300 hover:text-white"}`}
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-montserrat transition-all ${!isSignIn ? "bg-yellow-400 text-gray-900" : "text-gray-300 hover:text-white"}`}
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="transition-all duration-300">
            {isSignIn ? <SignIn /> : <SignUp />}
          </div>
        </div>
      </div>
    </main>
  );
};
