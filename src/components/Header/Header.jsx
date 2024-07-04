'use client'
import { motion,useAnimate } from "framer-motion";
import styles from './header.css';
import { useEffect, useRef } from "react";



export default function Header(){
const [scope,animate]=useAnimate()

useEffect(()=>{

},[])

async function AnimationDone(){
  console.log("doneeeeeeeee")
  await animate(scope.current,{ x: -600,y:350, opacity: 1 },{duration:2});
  console.log('completed')
}

    return (
      <div style={{ display: "flex" }}>
        <motion.div id="header"
          initial={{ x: -100,y:150, opacity: 0 }}
          animate={{ x: 75,y:150, opacity: 1 }}
          transition={{ duration: 2 }}
          onAnimationComplete={AnimationDone}
        >
            DJS NOVA
            </motion.div>

        <motion.div id="child" ref={scope} style={{color:"white",fontSize:"50px"}}
          initial={{ x: -700,y:350, opacity: 0 }}
        >
             Astronomy Club of DJ Sanghvi 
            </motion.div>

      </div>
    );
  };