import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Adduser = () => {
  const [fullName, setFullName] = useState({
    name: "",
    email: "",
    phoneno: "",
  });
  const history = useHistory();

  console.log(fullName);
  const onValue = (e) => {
    console.log(e.target.value);
    setFullName({ ...fullName, [e.target.name]: e.target.value });
  };
  const url="http://localhost:3003/user"
  const Submite = async () => {
    return await axios.post(url, fullName);
    history.push("./Alluser");
  };
  return (
    <div className="container">
      <div className="title">Registration</div>
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Username</span>
            <input
              type="text"
              placeholder="Enter your username"
              required
              name="name"
              onChange={(e) => onValue(e)}
              value={fullName.name}
            />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="text"
              placeholder="Enter your email"
              required
              name="email"
              onChange={(e) => onValue(e)}
              value={fullName.email}
            />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input
              type="text"
              placeholder="Enter your number"
              name="phoneno"
              onChange={(e) => onValue(e)}
              value={fullName.phoneno}
            />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" onClick={() => Submite()} />
        </div>
      </form>
    </div>
  );
};
export default Adduser;
