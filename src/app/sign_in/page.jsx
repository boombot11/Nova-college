

import styles from './login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import Splin from '@/components/Spline/Spline';
import Navbar from '@/components/Navbar/Navbar';

import Footer from '@/components/Footer/footer';
import Signup from '@/components/Signup/login';



export default function page(){


 return <>
     <div >
      <Wrapper>
      <Splin></Splin>
       <Navbar></Navbar>
        <Content>
       <Signup></Signup>
      <Footer></Footer>
        </Content>
      </Wrapper>
  
    </div>
 </>
    }

    function Wrapper({children}){
        return <div id="wrapper" > { children} </div>
      }
      
      function Content({children}){
        return <div id="Content" > { children} </div>
      }