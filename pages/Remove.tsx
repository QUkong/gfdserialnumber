import React from "react";
import { useState } from "react";
import { db } from "../Firebase/clientapp";
import { getDocs, collection } from "firebase/firestore";
import { ListContainerID } from "../components/ListContainerID";

const Remove = () => {
  const [users, setUsers] = useState<any[]>([]);

  const handleRetrieve = async () => {
    const data = await getDocs(collection(db, "Users"));
    const retval = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(retval);
    setUsers(retval);
    return retval;
  };

  return (
    <div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          await handleRetrieve();
        }}
      >
        Get Data
      </button>
      {users ? <ListContainerID UserList={users} /> : null}
    </div>
  );
};

export default Remove;
