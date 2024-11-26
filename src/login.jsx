
import React from "react";
 
const LoginPage = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center ">Want to check out this file?</h1>
        <p className="text-center mb-6 font-semibold text-2xl">Sign up or Log in</p>
        
        <button className="w-full border border-color: rgb(0 0 0) text-1.5xl py-3 px-4 rounded-md  transition duration-200">
          Continue with Google
        </button>
 
        <div className="text-center my-4">or</div>
 
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-3 mb-4  boreder border-color: rgb(0 0 0); focus:ring-black-500"
        />
 
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md p-3 mb-6  border border-color: rgb(0 0 0); focus:ring-black-500"
        />
 
        <button className="w-full bg-black text-semibold text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200">
          Create account
        </button>
 
        <p className="text-xs text-gray-500 mt-4 text-center">
          By clicking "Create account" or "Continue with Google", you agree to the 
          <a href="#" className="text-blue-500 underline ml-1">Figma TOS</a> and 
          <a href="#" className="text-blue-500 underline ml-1">Privacy Policy</a>.
        </p>
 
        <p className="text-center mt-4">
          <a href="#" className="text-blue-500 underline">Use single sign-on</a>
        </p>
 
        <p className="text-center mt-4">
          Already have an account? 
          <a href="#" className="text-blue-500 underline ml-1">Log in</a>
        </p>
      </div>
    </div>
  );
};
 
export default LoginPage;
 