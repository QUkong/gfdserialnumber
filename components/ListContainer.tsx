import React from "react";
import ListItem from "./ListItem";
import { User } from "./UserInterface";

export const ListContainer = ({ UserList }: { UserList: User[] }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-3 bg-amber-400 px-4 pt-2 text-2xl font-bold text-white">
          <div>First</div>
          <div>Last</div>
          <div>Serial Number</div>
        </div>
        <ul className="bg-amber-400 p-4">
          {UserList.map((user) => {
            return <ListItem User={user} />;
          })}
        </ul>
      </div>
    </>
  );
};
