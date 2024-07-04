
import Image from "next/image";
import styles from './globals.css'
import 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default  async function Home() {


  return (
  <div>
  </div>
  );
}

function Wrapper({children}){
  return <div id="wrapper" > { children} </div>
}

function Content({children}){
  return <div id="Content" > { children} </div>
}