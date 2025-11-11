import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div>
        <p className="text-xl font-bold text-indigo-900">Register Your Account</p>
      </div>
      <form className="bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2 shadow-lg">
        {/* Name */}
        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />

        {/* Photo URL */}
        <label className="label">Photo URL</label>
        <input type="text" className="input" placeholder="Photo URL" />

        {/* email */}
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        {/* password */}
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        {/* register btn */}
        <Link
          to="/auth/login"
          className="btn btn-warning hover:btn-success mt-4 w-full"
        >
          Register
        </Link>


        <div><p className="text-sm">Already have an account? <Link to="/auth/login" className="text-indigo-700">Login</Link></p></div>
      </form>
    </div>
  );
};

export default Register;
