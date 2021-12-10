import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser } from "./api";
import { deleteuser } from "./api";

const Alluser = () => {
  const [users, setUsers] = useState([]);

  const editForm = () => {
    console.log("clicked");
  };
  useEffect(() => {
    loadUsers();
  }, []);
  console.log(users);

  const loadUsers = async () => {
    const result = await getUser();
    console.log(result.data);
    setUsers(result.data);
  };
  const dlt = async (id) => {
    await deleteuser(id);
    loadUsers();
  };
  return (
    <div>
      <div className="all-container">
        <div className="py-4">
          <table className="table border shadow">
            <thead className="table table-success table-striped">
              <tr>
                <th scope="col">st.No</th>
                <th scope="col">name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneno}</td>

                    <td>
                      <Link
                        className="btn btn-outline-primary mr-2"
                        to={`/Edit/${user.id}`}
                        onClick={editForm}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => dlt(user.id)}
                        className="btn btn-danger mr-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
