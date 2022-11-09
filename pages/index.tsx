import Head from "next/head";
import Image from "next/image";

import { useRef, useState } from "react";
import { db } from "../Firebase/clientapp";
import { getDocs, addDoc, collection, getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { User } from "../components/UserInterface";
import { ListContainer } from "../components/ListContainer";

export default function Home() {
  const router = useRouter();
  const first = useRef<HTMLInputElement>(null);
  const last = useRef<HTMLInputElement>(null);
  const serial = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [successMsg, setSuccessMsg] = useState<string>();

  const handleRetrieve = async () => {
    const data = await getDocs(collection(db, "Users"));
    const retval = data.docs.map((doc) => ({ ...doc.data() }));
    console.log(retval);
    setUsers(retval);
    return retval;
  };

  async function handleSubmit() {
    if (firstName != "" && lastName != "" && serialNumber != "") {
      await addDoc(collection(db, "Users"), {
        FirstName: firstName,
        LastName: lastName,
        SerialNumber: serialNumber,
      });
      first.current!.value = "";
      last.current!.value = "";
      serial.current!.value = "";
      return { retval: "Success" };
    }
  }

  //firstName = ""
  return (
    <>
      <Head>
        <title>GFD Serial Number</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id="main-page-container">
        <form
          className="flex flex-col gap-4 p-4 bg-slate-200 text-xl"
          onSubmit={async (e) => {
            e.preventDefault();
            const retval = await handleSubmit();
            setSuccessMsg(retval?.retval);
          }}
        >
          <label id="first-name">First Name</label>
          <input
            className="pl-1"
            ref={first}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            placeholder="John"
          ></input>
          <label id="last-name">Last Name</label>
          <input
            className="pl-1"
            ref={last}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Doe"
          ></input>
          <label id="serial-numer">Serial Number</label>
          <input
            className="pl-1"
            ref={serial}
            onChange={(e) => {
              setSerialNumber(e.target.value);
            }}
            type="text"
            placeholder="R90NXPA2"
          ></input>

          <button
            className="bg-sky-300 w-fit mx-auto px-4 py-1 rounded-2xl text-slate-500 hover:bg-sky-200 active:bg-sky-400"
            id="form-submission"
          >
            Submit
          </button>
          {successMsg ? <div className="text-green-600">Added!</div> : null}
        </form>
        <button
          className="bg-red-300 py-1 px-4 text-white"
          onClick={async (e) => {
            e.preventDefault();
            await handleRetrieve();
          }}
        >
          Get Data
        </button>
        {users ? <ListContainer UserList={users} /> : null}
      </div>
    </>
  );
}
