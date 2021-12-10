import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUser } from "./api";
import { Ediuser } from "./api";

const Edit = () => {
  const init = {
    name: "",
    email: "",
    phoneno: "",
  };
  const [fullName, setFullName] = useState(init);
  const History = useHistory();
  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    const response = await getUser(id);
    setFullName(response.data);
    console.log(response);
  };

  console.log(fullName);
  const onValue = (e) => {
    console.log(e.target.value);
    setFullName({ ...fullName, [e.target.name]: e.target.value });
  };
  const Edituser = async () => {
    await Ediuser(id, fullName);
    setFullName({ init: "" });
    History.push("./Alluser");
  };

  return (
    <div className="container">
      <div className="title">Edit User</div>
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
          <input type="submit" value="Update" onClick={() => Edituser()} />
        </div>
      </form>
    </div>
  );
};
export default Edit;
