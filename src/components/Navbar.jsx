import React, { useEffect } from 'react'

export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])  

  return <nav className='fixed top-0 w-full z-40 bg-[rgba-(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
    <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
            <a href='#home' className='font-mono text-xl font-bold text-white'>
                Mike<span className='text-blue-500'>.way()</span> 
            </a>
            <div 
                className='w-7 h-5 relative cursor-pointer z-40 md:hidden' 
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                &#9776;
            </div>

            <div className='hidden md:flex items-center space-x-8'>
                <a 
                    href="#home" 
                    className='text-grey-300 hove:text-white transiton-colors'
                >
                    {" "}
                    Home{" "}
                </a>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
                <a 
                    href="#about" 
                    className='text-grey-300 hove:text-white transiton-colors'
                >
                    {" "}
                    About{" "} 
                </a>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
                <a 
                    href="#projects" 
                    className='text-grey-300 hove:text-white transiton-colors'
                >
                    {" "}
                    Projects{" "} 
                </a>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
                <a 
                    href="#contact" 
                    className='text-grey-300 hove:text-white transiton-colors'
                >
                    {" "}
                    Contact{" "}
                </a>
            </div>

        </div>
    </div>
  </nav>
}
export default Navbar