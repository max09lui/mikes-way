import {RevealOnScroll} from "../RevealOnScroll"
import profile_pic from "../../assets/profile_pic.jpg" 
import { FaLinkedin} from "react-icons/fa"
import { FaGithub} from "react-icons/fa"
import { CiMail } from "react-icons/ci";
import { IoMailSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";


const link= "https://media.licdn.com/dms/image/v2/D5603AQH_yKP4j5S-YA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719894512281?e=1757548800&v=beta&t=UPOGCqkrfzhs2DFOqE7qmRA34g6f1uhYXDNieFlFI7s"

export const Home = () => {

    /*
    <div className="text-center z-10 px-4 flex justify-center">
                <a
                            href="https://drive.google.com/file/d/1lJD9twCT5Fk5WQAj5E_81KF-kgzSKdKA/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0 text-blue-500 hover:underline"
                        >
                            <FaFilePdf />
                            <b>Resume</b>
                        </a></div>
    */

    return (
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative"
    >
        

        <RevealOnScroll>
        
        <div>
            <div className="flex justify-center">
                <img src={profile_pic} width={300} height={300} alt="Profile" className="rounded-full" />
                {" "}
            </div>
            <br></br>
            
            <div className="text-center z-10 px-4 ">
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Michael Lui
                </h1>
                <div className="flex justify-center gap-3">
                        
                        <a
                            href="https://www.linkedin.com/in/michael-lui-a244771b7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0 text-blue-500 hover:underline"
                            >
                            <FaLinkedin />
                            <b>LinkedIn</b>
                            
                        </a>
                        <a
                            href="https://github.com/max09lui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0 text-blue-500 hover:underline"
                        >
                            <FaGithub />
                            <b>GitHub</b>
                        </a>
                        <a
                            href="mailto:max09lui@g.ucla.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0 text-blue-500 hover:underline"
                        >
                            <IoMailSharp />
                            <b>max09lui@g.ucla.edu</b>
                        </a>
                        
                    
                </div>
                
                
                
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Aspiring mathematician and computer scientist, interested in optimizing and exploiting ineffincies seen in today's financial markets
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59. 130, 246, 0.4)]">
                        View Projects
                    </a>
                    <a href="#contact" className="border borde-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration=200 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59. 130, 246, 0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
                
            </div>
            
        </div>
        </RevealOnScroll>
    </section>
  )
}
