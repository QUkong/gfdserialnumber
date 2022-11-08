import React, { useEffect } from "react";
import useCoords from "../lib/useCoords";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/clientapp";

const ContextMenu = () => {
  const { coord, onItem, id } = useCoords();
  const { x, y } = coord;
  return (
    <>
      {onItem ? (
        <div
          className={`absolute bg-slate-600 text-white p-1 rounded-md gap-1 flex flex-col`}
          style={{ top: y, left: x }}
        >
          <div
            onClick={async (e) => {
              await deleteDoc(doc(db, "Users", id));
            }}
            className="hover:bg-zinc-400/70 p-1 font-semibold bg-slate-500/60"
          >
            Delete
          </div>
          {/* <div
            onClick={(e) => {
              console.log("haha stinky");
            }}
            className="hover:bg-zinc-400/70 p-1 font-semibold bg-slate-500/60"
          >
            Poo poo
          </div>
          <div
            onClick={(e) => {
              console.log("pranked bro");
            }}
            className="hover:bg-zinc-400/70 p-1 font-semibold bg-slate-500/60"
          >
            Haha Funny
          </div> */}
        </div>
      ) : null}
    </>
  );
};

export default ContextMenu;
