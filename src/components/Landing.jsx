import React from "react";

export default function Landing() {
    return(
        <>
            <div className="p-3 max-w-lg mx-32 my-12 xs:mx-6">
                <div className="p-1 px-7 max-w-max md:px-5 sm:px-3 border border-black rounded-full">
                    <h4 className="font-poppins text-sml">Gina's Portfolio</h4>
                </div>
                <div className="relative max-w-md mt-5">
                    <h1 className="pb-2 font-poppins font-semibold text-7xl text-slate-950 leading-30 tracking-wide">Designing the Bridge Between</h1>
                    <h1 className="font-['Graindeur'] text-7xl absolute bottom-36 left-3/4 text-wild">Ideas</h1>
                    <h1 className="font-poppins font-bold text-7xl text-slate-950 leading-30 tracking-wide">and</h1>
                    <h1 className="font-['Graindeur'] text-7xl text-rodeo">Interaction</h1>
                </div>
            </div>
            <div className="flex justify-evenly items-center mt-32 mx-auto max-w-lg">
                <h2 className="font-poppins text-lg">Front End Developer</h2>
                <div className="h-2 w-2 bg-black rounded-lg"/>
                <h2 className="font-poppins text-lg">UI/UX Designer</h2>
            </div>
        </>
    )
};