import React from "react";
import {PiMouseSimpleThin} from 'react-icons/pi';

export default function Landing() {
    return(
        <>
            <div className="p-3 my-24">
                <div className="py-1 px-7 max-w-max md:px-5 sm:px-3 border border-black rounded-full">
                    <h4 className="font-poppins text-sml">Gina's Portfolio</h4>
                </div>
                <div className="relative max-w-md mt-5">
                    <h1 className="pb-2 font-poppins font-semibold text-7xl text-slate-950 leading-30 tracking-wide">Designing the Bridge Between</h1>
                    <h1 className="font-['Graindeur'] text-7xl absolute bottom-36 left-3/4 text-wild">Ideas</h1>
                    <h1 className="font-poppins font-bold text-7xl text-slate-950 leading-30 tracking-wide">and</h1>
                    <h1 className="font-['Graindeur'] text-7xl text-rodeo">Interaction</h1>
                </div>
                <div className="flex items-center absolute top-1/2 right-1 rotate-90 tracking-wider">
                    <span className="font-poppins text-darkerwild mr-4 font-thin text-sm">Scroll Down</span>
                    <PiMouseSimpleThin size={30} color={'#949b38'} stroke-width="2" className="-rotate-90"/>
                </div>
            </div>
            <div className="absolute -left-7 -bottom-16 w-60 h-60 bg-lightwild rounded-full opacity-20"/>
            <div className="absolute -left-7 top-2/3 w-36 h-36 bg-wild rounded-full opacity-70"/>
            <div className="flex justify-evenly items-center my-32 mx-auto max-w-lg">
                <h2 className="font-poppins text-lg">Front End Developer</h2>
                <div className="h-2 w-2 bg-black rounded-lg"/>
                <h2 className="font-poppins text-lg">UI/UX Designer</h2>
            </div>
        </>
    )
};