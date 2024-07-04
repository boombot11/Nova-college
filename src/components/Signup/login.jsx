'use client'
import styles from './login.css';
import { motion,useAnimate } from "framer-motion";
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/lib/firebase';
import { useEffect,useState } from 'react';
export default function Signup(){

  useEffect(()=>{

  },[])

    const app=initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [logged,setlog]=useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signups= async()=>{
        const response= await createUserWithEmailAndPassword(auth,email,password).then(()=>{
          alert("created user")
          window.location.href='http://localhost:3000/home'
        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("error: "+errorCode+" :: "+errorMessage)
        //    window.location.href='http://localhost:3000/home'
          });
        console.log(response)
        }
        console.log('sucess')
      //  window.location.href='http://localhost:3000/home'
   ;
    
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
    <strong>Sign In</strong>
<div id='login'>
<div >
                <input onChange={emails} type="email"  id="floatingInputEmail" placeholder="name@example.com"/>
              </div>
              <div  className="password">
                <input onChange={pass} type="password"  id="floatingInputEmail" placeholder="****"/>     
              </div>


</div>
<button onClick={signups}>Sign in</button>
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