import React from "react";
import { toast } from "react-toastify";

const TryNowPage = () => {
  const handleTryNow = (e) => {
    e.preventDefault();

    return toast.success("Successfully form submit");
  };

  return (
    <div>
      <form onSubmit={handleTryNow}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Try Now</legend>

          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <button type="submit" className="btn btn-warning mt-4">
            Try Now
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default TryNowPage;
