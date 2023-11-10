import React from "react";
import {PiMouseSimpleThin} from 'react-icons/pi';


export default function Landing() {
    return(
        <>
            <div className="p-3 my-24 max-w-max">
                <div className="w-40 py-1 px-7 md:px-5 sm:px-3 border border-black rounded-full mx-32">
                    <h4 className="font-poppins text-sml ">Gina's Portfolio</h4>
                </div>
                <div className="mt-16 flex flex-col justify-center text-center mx-auto">
                {/* absolute bottom-36 left-3/4 */}
                    <span className="font-poppins font-bold text-7xl text-slate-950 leading-30 tracking-wide opacity-50">Create the Bridge Between</span>
                    <div className="my-3">
                        <span className="font-graindeur text-6xl text-darkerwild">Ideas</span>
                        <span className="font-poppins font-bold text-2xl text-slate-950 leading-30 tracking-wide mx-2 opacity-50">and</span>
                        <span className="font-graindeur text-6xl text-rodeo">Interaction</span>
                    </div>
                    <p className="mt-3 font-poppins mx-96 xxs:mx-auto">Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque orci integer elit massa nisl rhoncus turpis dolor. Adipiscing pellentesque orci integer elit massa nisl rhoncus turpis dolor</p>
                </div>
                <div className="flex items-center absolute bottom-1/2 right-1 rotate-90 tracking-wide">
                    <span className="font-poppins mr-4 text-xs">Scroll Down</span>
                    <PiMouseSimpleThin size={25} color={'#000000'} stroke-width="2" className="-rotate-90"/>
                </div>
            </div>
        </>
    )
};