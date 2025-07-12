import { useState } from 'react'
import './App.css'
import {LoadingScreen} from "./components/LoadingScreen"
import "./index.css"
import {Navbar} from "./components/Navbar"
import {MobileMenu} from "./components/MobileMenu"
import {Home} from "./components/sections/Home"
import {About} from "./components/sections/About"
import {Projects} from "./components/sections/Projects"
import {Contact} from "./components/sections/Contact"
const link= "https://media.licdn.com/dms/image/v2/D5603AQH_yKP4j5S-YA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719894512281?e=1757548800&v=beta&t=UPOGCqkrfzhs2DFOqE7qmRA34g6f1uhYXDNieFlFI7s" 

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const hashMap = {};

  hashMap[1] = "let mike have way = true;;";
  hashMap[2] = "<mike's way/>";
  hashMap[3] = "for way in mike's_way: print(way)";
  hashMap[4] = "sudo curl mike's_way";
  hashMap[5] = "cd ~/mike's_way"
  hashMap[6] = "cat mike's_way/root"
  hashMap[7] =""
  hashMap[8] =""
  hashMap[9] =""
  hashMap[10] =""

  const randomNum = Math.floor(Math.random() * 12) + 1
  if (randomNum > 6)
  {
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} fullText={hashMap[randomNum]} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100` }>
      <div>
        
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </div>
      
    </>
  )
}

export default App
