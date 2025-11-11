import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div>
        <p className="text-xl font-bold text-indigo-900">
          Register Your Account
        </p>
      </div>
      <form
        onSubmit={handleRegister}
        className="bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-2 shadow-lg"
      >
        {/* Name */}
        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Name"
          required
        />

        {/* Photo URL */}
        <label className="label">Photo URL</label>
        <input
          name="photo"
          type="text"
          className="input"
          placeholder="Photo URL"
          required
        />

        {/* email */}
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          required
        />

        {/* password */}
        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
          required
        />

        {/* register btn */}
        <button
          type="submit"
          to="/auth/login"
          className="btn btn-warning hover:btn-success mt-4 w-full"
        >
          Register
        </button>

        <div>
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-indigo-700">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
