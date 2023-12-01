import React, {useState} from "react";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

    }
    return(
        <header>
            <nav className="bg-transparent p-6">
                <div className="container mx-auto flex justify-end items-center">
                    <div className="hidden md:flex space-x-6">
                        <a href="/" className="font-poppins hover:text-rodeo">Home</a>
                        <a href="/#aboutme" className="font-poppins hover:text-rodeo">About</a>
                        <a href="/#project" className="font-poppins hover:text-rodeo">Projects</a>
                    </div>

                    <div className="md:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                        </svg>
                    </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden flex flex-col mt-2 gap-3">
                        <a href="/" className="font-poppins hover:text-rodeo">Home</a>
                        <a href="/#aboutme" className="font-poppins hover:text-rodeo">About</a>
                        <a href="/#project" className="font-poppins hover:text-rodeo">Projects</a>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;