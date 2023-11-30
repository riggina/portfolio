import React from "react";

const Navbar = () => {
    return(
        <header className="mx-12 bg-transparent flex justify-end mt-2">
            <div className="flex justify-between items-center max-w-6xl p-3">
                <ul className="flex gap-4">
                    <a href="/">
                        <li className='font-poppins hidden sm:inline text-slate-950 hover:text-gray-100'>Home</li>
                    </a>
                    <a href="/#aboutme">
                        <li className='font-poppins hidden sm:inline text-slate-950 hover:text-gray-100'>About Me</li>
                    </a>
                    <a href="/#project">
                        <li className='font-poppins hidden sm:inline text-slate-950 hover:text-gray-100'>Projects</li>
                    </a>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;