import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";



const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)

const Login = () => {

  const handleGoogleSignIn=()=>{
    
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      console.log(result);
      setUser(result.user)
      navigate("/")
      
    })
    .catch(error=>{
      console.log(error);
      
    })
    
  }

  const [error, setError] = useState("");

  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();

  const { signIn, setUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div>
        <p className="text-xl font-bold text-indigo-900">Login Your Account</p>
      </div>
      <form
        onSubmit={handleLogin}
        className="bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2 shadow-lg"
      >
        {/* email */}
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          required
        />
        {/* Password */}
        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
          required
        />
        {/* forgot Password */}
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        {/* login btn */}
        <button
          type="submit"
          className="btn btn-warning hover:btn-success mt-4 w-full"
        >
          Login
        </button>
        {/* register */}
        <div>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-indigo-700">
              Register
            </Link>
          </p>
        </div>
      </form>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary"><FcGoogle /> Sign In With Google</button>
    </div>
  );
};

export default Login;
