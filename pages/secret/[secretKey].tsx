import React from "react";
import { useState } from "react";
import { db } from "../../Firebase/clientapp";
import { getDocs, collection } from "firebase/firestore";
import { ListContainerID } from "../../components/ListContainerID";
import ContextMenu from "../../components/ContextMenu";
import { useRouter } from "next/router";

const Remove = () => {
  const [users, setUsers] = useState<any[]>([]);
  const router = useRouter();
  const secretKey = router.query.secretKey as string;
  console.log(secretKey);

  const handleRetrieve = async () => {
    const data = await getDocs(collection(db, "Users"));
    const retval = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setUsers(retval);
    return retval;
  };
  if (secretKey == process.env.SECRETKEY) {
    return (
      <>
        <ContextMenu />
        <div>
          <button
            className="bg-pink-400 p-1 rounded"
            onClick={async (e) => {
              e.preventDefault();
              await handleRetrieve();
            }}
          >
            Get Data
          </button>
          {users ? <ListContainerID UserList={users} /> : null}
        </div>
      </>
    );
  } else {
    return <div>Invalid Access</div>;
  }
};

export default Remove;
