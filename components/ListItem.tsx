import { doc } from "firebase/firestore";
import React from "react";
import { User } from "./UserInterface";

const ListItem = ({ User }: { User: User }) => {
  return (
    <li className="grid grid-cols-3 p-2 bg-blue-100 mb-2">
      <div className="">{User.FirstName}</div>
      <div>{User.LastName}</div>
      <div>{User.SerialNumber}</div>
    </li>
  );
};

export default ListItem;
