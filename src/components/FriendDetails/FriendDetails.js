import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friendsDetail = useLoaderData();
  console.log(friendsDetail);
  return (
    <div>
      <h1>Name: {friendsDetail.name}</h1>
      <h4>Phone No : {friendsDetail.phone}</h4>
      <h4>Company : {friendsDetail.company.name}</h4>
    </div>
  );
};

export default FriendDetails;
