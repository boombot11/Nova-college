'use client'
import styles from './login.css';
import { useRouter } from 'next/navigation'
import { motion,useAnimate } from "framer-motion";
import { getAuth,onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/lib/firebase';
import { useEffect,useState } from 'react';
export default function Login(){
  const [logged,setLogged]=useState(false)
  
  useEffect(()=>{
    const app=initializeApp(firebaseConfig);
    const auth = getAuth(app);
  onAuthStateChanged(auth,(user) => {
      if (!user) {
          console.log("noooooooooooo  ");
          
      } else {
       
        setLogged(true)
        console.log("yessssssssssssssss  ");
      }
  } )
  },[])
    const router=useRouter();
    const app=initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signups= async()=>{
      
        const response= await signInWithEmailAndPassword(auth,email,password).then(()=>{
    window.location.href='http://localhost:3000/home'
        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("error: "+errorCode+" :: "+errorMessage)
        
          });
        console.log(response)
        }
        console.log('sucess')
      //  window.location.href='http://localhost:3000/home'
   
   ;
   
   function redirect(){
    window.location.href="http://localhost:3000/sign_in"
   }

          const emails=(event)=>{
           var {value}=event.target;
           console.log(value)
           setEmail(value);
          }
          const pass=(event)=>{
            var {value}=event.target;
            console.log(value)
            setPassword(value);
           }
     
     


return (
<div >
  <Head></Head>
  <div className="container">
    <strong>Login</strong>
<div id='login'>
<div >
                <input onChange={emails} type="email"  id="floatingInputEmail" placeholder="name@example.com"/>
              </div>
              <div  className="password">
                <input onChange={pass} type="password"  id="floatingInputEmail" placeholder="****"/>     
              </div>


</div>
<button onClick={signups}>Login</button>
<button id='create' onClick={redirect}>Sign up</button>
</div>
  </div>
);
}

 function Head(){
 return (
      <div style={{ display: "flex" }}>
        <motion.div id="header"
          initial={{ x: -100,y:150, opacity: 0 }}
          animate={{ x: 75,y:150, opacity: 1 }}
          transition={{ duration: 2 }}

        >
         <div id='img'></div>
            </motion.div>
            </div>
);
}