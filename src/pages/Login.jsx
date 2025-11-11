import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div>
        <p className="text-xl font-bold text-indigo-900">Login Your Account</p>
      </div>
      <form className="bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2 shadow-lg">
        {/* email */}
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />
        {/* Password */}
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        {/* forgot Password */}
        <div><a className="link link-hover">Forgot password?</a></div>
        {/* login btn */}
        <button className="btn btn-warning hover:btn-success mt-4 w-full">Login</button>
        {/* register */}
        <div><p className="text-sm">Don't have an account? <Link to="/auth/register" className="text-indigo-700">Register</Link></p></div>
      </form>
    </div>
  );
};

export default Login;
