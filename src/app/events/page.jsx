
import Image from "next/image";

import 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Navbar from "@/components/Navbar/Navbar";
import Splin from "@/components/Spline/Spline";
import Header from "@/components/Header/Header";
import styles from './globals.css'
import Light from "@/components/Light/Light";
import Footer from "@/components/Footer/footer";
import Horizon from "@/components/Horizon/horizon";

export default  async function Home() {

  return (
    <>
    <div >
      <Wrapper>
     <Splin></Splin>
        <Navbar></Navbar>
        <Content>
      <div id="horizon">
        <Horizon></Horizon>

      </div>
        </Content>
   
      </Wrapper>
     
    </div>

    </>
    );
  }
  
  function Wrapper({children}){
    return <div id="wrapper" > { children} </div>
  }
  
  function Content({children}){
    return <div id="Content" > { children} </div>
  }