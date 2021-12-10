import React from "react";

const View = () => {
  return (
    <div className="container">
    <div className="title">Details</div>
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Username</span>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="Enter your number" required />
        </div>
        </div>
      <div className="button">
        <input type="submit" value="Cancle" />
      </div>
    </form>
  </div>
  );
};
export default View;
