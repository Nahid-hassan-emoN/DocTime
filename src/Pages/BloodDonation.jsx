import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users;
};
const BloodDonation = () => {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    useQuery: ["users"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <h3>Loading Now.......</h3>;
  }
  if (error) {
    return <h3>Error{error.messae}</h3>;
  }
  return (
    <>
      <div className="container-xl blood-Donation">
        <h1 className="top-header text-center font-bold ">Blood Donation</h1>
        <div className="blood-info-table">
          <table className="table-auto">
            <thead>
              <tr>
                <th>No </th>
                <th>Name</th>

                <th>Age</th>
                <th>Address</th>
                <th>Blood Group</th>
                <th>Phone No</th>
              </tr>
            </thead>
            {users.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td>{user.id}</td>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.age}</td>

                  <td>
                    {user.address.address} , &nbsp;
                    <span className="cityAddress"> {user.address.city}</span>
                  </td>
                  <td>{user.bloodGroup}</td>
                  <td>{user.phone}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default BloodDonation;
