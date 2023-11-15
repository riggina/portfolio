import {React} from "react";
import {PiMouseSimpleThin} from 'react-icons/pi';

export default function Landing() {
    return(
        <>
            <div className="p-3 lg:my-16 max-w-max">
                <div className="w-40 py-1 px-7 md:px-5 sm:px-3 border border-flintdark rounded-full lg:mx-36 xs:mx-32">
                    <h4 className="font-poppins text-flintdark">Gina's Portfolio</h4>
                </div>
                <div className="mt-8 flex flex-col justify-center text-center mx-auto">
                {/* absolute bottom-36 left-3/4 */}
                    <h1 className="font-unbounded font-bold text-8xl text-slate-950  leading-30 tracking-thin opacity-50">
                        <span>Create
                            <svg className="absolute top-60 -translate-y-1/2 rotate-2 left-1/3 w-1/3" 
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
                    <span className="font-unbounded font-bold text-7xl text-slate-950 leading-30 tracking-thin opacity-50">the Bridge Between</span>
                    <div className="my-3">
                        <span className="font-graindeur text-6xl text-darkerwild">Ideas</span>
                        <span className="font-unbounded font-bold text-2xl text-slate-950 leading-30 tracking-wide mx-2 opacity-50">and</span>
                        <span className="font-graindeur text-6xl text-rodeo">Interaction</span>
                    </div>
                    <p className="mt-3 font-poppins xl:mx-96 sm:mx-32">Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque orci integer elit massa nisl rhoncus turpis dolor. Adipiscing pellentesque orci integer elit massa nisl rhoncus turpis dolor</p>
                </div>
                <div className="flex items-center absolute bottom-1/2 right-1 rotate-90 tracking-wide">
                    <span className="font-poppins mr-4 text-xs">Scroll Down</span>
                    <PiMouseSimpleThin size={25} color={'#000000'} strokeWidth="2" className="-rotate-90"/>
                </div>
            </div>
        </>
    )
};