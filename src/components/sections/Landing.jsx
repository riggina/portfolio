import {React} from "react";
import {PiMouseSimpleThin} from 'react-icons/pi';

export default function Landing() {
    return(
        <>
            <div className="lg:mt-12 w-28 sm:w-40 py-2 border border-flintdark rounded-full lg:mx-60 mx-8">
                <h4 className="font-poppins text-flintdark text-xs sm:text-sm text-center">Gina's Portfolio</h4>
            </div>
            <div className="mx-auto mb-8 sm:mb-16 max-w-max relative">
                <div className="mt-3 sm:mt-8 flex flex-col justify-center text-center mx-auto">
                    <h1 className="font-unbounded font-bold text-6xl sm:text-8xl text-slate-950  leading-30 tracking-thin opacity-50">
                        <span>Create
                            <svg className="hidden lg:inline absolute -translate-y-1/2 rotate-2 w-1/3 top-14 left-1/3" 
                                data-name="Layer 1" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 842.14 500">
                                <path className="draw" 
                                    d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47" 
                                    fill="none" 
                                    stroke="#E5EB90" 
                                    strokeMiterlimit="10" 
                                    strokeWidth="8" />
                            </svg>
                        </span>
                    </h1>
                    <span className="font-unbounded font-bold text-4xl sm:text-7xl text-slate-950 leading-30 tracking-thin opacity-50">the Bridge Between</span>
                    <div className="my-1 sm:my-3">
                        <span className="font-unbounded sm:font-graindeur text-xl sm:text-6xl text-darkerwild">Ideas</span>
                        <span className="font-unbounded text-md sm:text-2xl text-slate-950 leading-30 tracking-wide mx-2 opacity-50">and</span>
                        <span className="font-unbounded sm:font-graindeur text-xl sm:text-6xl text-rodeo">Interaction</span>
                    </div>
                    <p className="hidden sm:inline mt-3 font-poppins lg:mx-72 text-sm">
                        This website is created as a portfolio site, serving as a repository for the projects I have undertaken throughout my professional journey.</p>
                </div>
                <div className="flex gap-2 items-center absolute bottom-1/2 -right-4 sm:bottom-1/2 sm:right-1 rotate-90 tracking-wide">
                    <span className="font-poppins text-xxs sm:text-xs text-black/50">Scroll Down</span>
                    <PiMouseSimpleThin size={window.innerWidth >= 640 ? 24 : 12} color={'#00000050'} strokeWidth="2" className="-rotate-90"/>
                </div>
            </div>
        </>
    )
};