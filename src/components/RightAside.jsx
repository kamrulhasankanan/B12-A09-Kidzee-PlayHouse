import React from "react";

const RightAside = () => {
  return (
    <div>
      <section>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Try Now</legend>

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <button className="btn btn-warning mt-4">Try Now</button>
        </fieldset>
      </section>
    </div>
  );
};

export default RightAside;
