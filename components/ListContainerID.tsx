import React from "react";
import ListItemID from "./ListItemID";
import { User } from "./UserInterface";

export const ListContainerID = ({ UserList }: { UserList: User[] }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-4 bg-amber-400 px-4 pt-2 text-2xl font-bold text-white">
          <div>First</div>
          <div>Last</div>
          <div>Serial Number</div>
          <div>ID</div>
        </div>
        <ul className="bg-amber-400 p-4">
          {UserList.map((user) => {
            return <ListItemID User={user} />;
          })}
        </ul>
      </div>
    </>
  );
};
