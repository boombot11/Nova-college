'use client'
import { useEffect } from 'react'
import styles from'./horizon.css'
import { motion,useAnimate } from 'framer-motion'



export default function HZ(){
const[pop,animate]=useAnimate()
const[opaque,A]=useAnimate()

useEffect(()=>{},[])
async function reverse(){
    await animate(opaque.current,{opacity:1},{duration:0.3})
    await animate(pop.current,{opacity:0,x:-300},{duration:0.3})
}

async function Register(){
    await animate(opaque.current,{opacity:0.2},{duration:0.3})
    await animate(pop.current,{opacity:1,x:300},{duration:0.3})
}

return <>
<motion.div ref={opaque} initial={{opacity:1}} class="container">
 <div class="wrapper">
   <div class="banner-image"> </div>
   <h1 id='title'>Event Horizon</h1>
   <p id='det'>Passion+Innovation </p>
  </div>
  <div class="button-wrapper"> 
  <button id='FBT' class="btn outline">Details</button>
    <button onClick={Register} class="btn fill">Register</button>
  </div>
    </motion.div>
    <motion.div ref={pop} style={{width:"100vh",height:"50vh",background:"none",position:"relative",display:"flex",flexDirection:"column",gap:"5vh"}}
  initial={{opacity:0,x:-300,y:-460}}
  >
<div onClick={reverse} id='confirm'>Confirm ?</div>
<div onClick={reverse} id='confirm'>Back</div>
  </motion.div>
</>
}