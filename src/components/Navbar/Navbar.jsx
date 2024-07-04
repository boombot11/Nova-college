"use client"
import { useEffect, useState ,useRef} from "react";
import styles from './Navbar.css';
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/lib/firebase";


export default function Navbar() {
  const scrollContainerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [text,setText]=useState("Login/Register")
    const [logged,setLogged]=useState(false)
  useEffect(()=>{
    const app=initializeApp(firebaseConfig);
    const auth = getAuth(app);
  onAuthStateChanged(auth,(user) => {
      if (!user) {
          console.log("noooooooooooo  "+text);
          
      } else {
        setText('Logout');
        setLogged(true)
        console.log("yessssssssssssssss  "+text);
      }
  } )
  },[text])


  const handleScrollTo = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  };
 
async  function flows(){
  const app=initializeApp(firebaseConfig);
  const auth = getAuth(app);
  if(!logged){
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
  window.location.href='http://localhost:3000/login'
  }
else{
  console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
  const response=await signOut(auth).then((res)=>{
    console.log(res);
    setText('Login/Register');
    setLogged(false);
    alert('Logged out Redirecting')
    window.location.href='http://localhost:3000/home'
  })
  
}
}

    return (
  
      <nav  style={{minWidth:"100%"}}>
        <a href="/home" className="title">
          Nova
        </a>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open pd" : "pd"}>
          <li>
            <a onClick={handleScrollTo}>About</a>
          </li>
          <li>
            <a onClick={()=>{window.location.href='http://localhost:3000/events'}}>Events</a>
          </li>
          <li>
            <a onClick={flows}>{text}</a>
          </li>
        </ul>
      </nav>
    
    );
  };