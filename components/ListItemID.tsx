import { doc } from "firebase/firestore";
import { userAgent } from "next/server";
import React from "react";
import { User } from "./UserInterface";

const ListItemID = ({ User }: { User: User }) => {
  return (
    <li data-user={User.id} className="grid grid-cols-4 p-2 bg-blue-100 mb-2">
      <div data-user={User.id} className="">
        {User.FirstName}
      </div>
      <div data-user={User.id}>{User.LastName}</div>
      <div data-user={User.id}>{User.SerialNumber}</div>
      <div data-user={User.id}>{User.id}</div>
    </li>
  );
};

export default ListItemID;
