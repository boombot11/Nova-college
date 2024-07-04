'use client'
import { inView } from "framer-motion/dom";
import { color, motion } from "framer-motion";
import styles from './about.css';
import { useAnimate,useInView } from "framer-motion";
import { useRef,useEffect } from "react";




export default function About(){
    const container = useRef(null);
    const [scope,animate]=useAnimate()
    const [about,Animate]=useAnimate()
    const [facility,A3]=useAnimate()
    const [footer,A4]=useAnimate()
  

  async function Flow(){
 await animate(scope.current,{opacity:1},{duration:1})
 await Animate(about.current,{opacity:1},{duration:1})
 await A3(facility.current,{opacity:1},{duration:1})
  }
    useEffect(()=>{

    },[])

   

    return <>
    <div id="main">
     <motion.div id="#about" style={{textAlign:"center",fontWeight:'bolder',fontSize:"50px"}}
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1}}
     onAnimationComplete={Flow}
     >
      About Nova
     </motion.div>
     <motion.div ref={scope} style={{textAlign:"center",fontWeight:"bold",fontSize:"25px",paddingTop:"1vh"}}
     initial={{opacity:0}}
     >
     " The History of Astronomy is A History of Recording Horizons "
     </motion.div>
     <div class="outer" >
     <motion.div class="row" ref={about} initial={{opacity:0}}>
    <div class="item"><p id="Title">SECRETARY</p>
     <div id='img'></div>
     </div>
     <div class="item"><p id="Title">CHAIRPERSON</p>
     <div id='img'></div>
     </div>
  </motion.div>
  <p id="Title2">OUR FACILITY CO-ORDINATORS</p>
  <motion.div class="row add" ref={facility} initial={{opacity:0}} >
  <div class="item"><p id="Title">SECRETARY</p>
     <div id='img'></div>
     </div>
<div class="item">
    <p id="Title">SECRETARY</p>
     <div id='img'></div>
     </div>
  </motion.div>
      </div>
    </div>
       
        </>
}