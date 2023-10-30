import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header className="mx-12 bg-transparent top-0 flex mt-3 justify-end sticky">
            <div className="flex justify-between items-center max-w-6xl p-3">
                <ul className="flex gap-4">
                    <Link to="/">
                        <li className='font-poppins hidden sm:inline text-slate-950 hover:text-gray-100'>Home</li>
                    </Link>
                    <Link to="/#aboutme">
                        <li className='font-poppins hidden sm:inline text-slate-950 hover:text-gray-100'>About Me</li>
                    </Link>
                    <Link to="/#project">
                        <li className='font-poppins hidden sm:inline text-slate-950 hover:text-gray-100'>Projects</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;