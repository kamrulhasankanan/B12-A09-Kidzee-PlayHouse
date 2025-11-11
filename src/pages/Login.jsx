import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {

  const {signIn, setUser} = use(AuthContext)

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      
    }).catch(error=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.warn("Please Register Your Account")
    })
  
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div>
        <p className="text-xl font-bold text-indigo-900">Login Your Account</p>
      </div>
      <form onSubmit={handleLogin} className="bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2 shadow-lg">
        {/* email */}
        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" />
        {/* Password */}
        <label className="label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" />
        {/* forgot Password */}
        <div><a className="link link-hover">Forgot password?</a></div>
        {/* login btn */}
        <button type="submit" className="btn btn-warning hover:btn-success mt-4 w-full">Login</button>
        {/* register */}
        <div><p className="text-sm">Don't have an account? <Link to="/auth/register" className="text-indigo-700">Register</Link></p></div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
