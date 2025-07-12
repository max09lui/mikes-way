import {RevealOnScroll} from "../RevealOnScroll"

export const Projects = () => {
  return (
    <section id="projects" className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'> Mancala (Capture) Game </h3>
            <p className='text-gray-400 mb-4'>
              Designed and implemented a complete Mancala game using object-oriented programming principles and
              modular class abstractions;
              Implemented a special feature of a smart bot that uses a mini max algorithm to find the best move to play
              against an opponent based on the current decision tree based on the game board.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["C++", "Game Theory", "Graph Theory"].map((tech, key) => (
                 <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                  {tech}
                  </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href="https://github.com/max09lui/CS32-Mancala.git" className='text-blue-400 hover:text-blue-300 transition colors my-4'>
                View Project
              </a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'> Web Messaging App </h3>
            <p className='text-gray-400 mb-4'>
              full-stack messaging web application, where I integrated a
              backend database to support core user functionalities.
              Collaborated with team members to implement real-time messaging, friend management
              (add/remove), and user profile customization.
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["Javascript", "MongoDB", "Express.js", "React", "Node.js"].map((tech, key) => (
                 <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                  {tech}
                  </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href="https://github.com/max09lui/CS35L-Project" className='text-blue-400 hover:text-blue-300 transition colors my-4'>
                View Project
              </a>
              
              
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'> Analysis and Modeling of the LA Highway Network </h3>
            <p className='text-gray-400 mb-4'>
              Analyzed a Los Angeles traffic dataset using mathematical network theory; 
              Collaborated on building a machine learning-based dynamical system model to predict traffic density
              distribution
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {["Python", "NetworkX", "Network Science", "Machine Learning", "Dynamical Systems"].map((tech, key) => (
                 <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                  {tech}
                  </span>
              ))}
            </div>
            <div className='flex justify-between items-center'>
              <a href="https://github.com/max09lui/math168-project" className='text-blue-400 hover:text-blue-300 transition colors my-4'>
                View Project
              </a>
            </div>
          </div>
          
          </div>
          

        
      </div>
      </RevealOnScroll>
    
    </section>
  )
}

export default Projects