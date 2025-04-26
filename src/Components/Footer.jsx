    import React from "react";
    import { IoMdMailUnread } from "react-icons/io";
    import { FaLocationDot } from "react-icons/fa6";
    import { FaGithub } from "react-icons/fa";
    import { FaLinkedin } from "react-icons/fa";
    import { FaHeartBroken } from "react-icons/fa";

    const Footer = () => {
        return(
            <>
                <div className=" justify-between lg:px-30 lg:w-screen lg:h-36 lg:py-6 lg:flex relative dark:text-white dark:bg-[#121212] lg:dark:bg-[#212121] bg-gray-400 text-black w-screen h-90 bottom-0  overflow-hidden ">
                    

                    <div className=" lg:w-70 lg:h-22 relative flex flex-col cursor-default ml-5 gap-2 pt-2">
                        <h3 className="font-bold " >Random Quote</h3>
                        <p className="font-light flex text-sm lg:text-[18px] lg:font-semibold">Male ego, the most fragile thing in existence <span className=" relative lg:my-7.5 lg:right-28 mt-1 ml-1"> <FaHeartBroken /> </span> </p>
                    </div>

                    <div className=" lg:w-50 lg:h-22 relative flex flex-col gap-3  lg:items-center ml-5 mt-6 ">
                        <h3 className="font-bold flex flex-col  " >Connect with me</h3>
                        <div className="relative flex lg:text-3xl gap-2 text-2xl ">
                        <a href="https://github.com/thesrijankumar" className="flex lg:text-3xl"> <FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/thesrijankumar/"> <FaLinkedin /> </a>
                        </div>

                    </div>

                    <div className=" lg:w-55 relative flex flex-col items-start lg:px-5 ml-5 pt-6">
                        <h3  className="text-xl  mb-1 font-bold"> Links</h3>
                        <a href="https://exchangeratesapi.io" className="text-md"> Exchange Rate API</a>
                        <a href="#">Quotes API</a>
                    </div>

                    <div className="lg:h-22 lg:w-70 w-60 flex flex-col ml-5 pt-5 ">
                    
                        <div className=" relative"><h3 className="text-xl mb-1 font-semibold "> About me</h3></div>
                        <div  className="w-56 "><a href="mailto:thesrijankumar@proton.me" className="items-center"> <span className="flex items-center right-2 gap-2"> <IoMdMailUnread /> thesrijankumar@proton.me</span></a></div>
                        <div  className="w-56 "><a href="https://maps.app.goo.gl/hvSjrfwP32nksNaZA" className="items-center"> <span className="flex items-center right-2 gap-2"> <FaLocationDot /> India</span></a></div>
                    </div>

                </div>
            </>
        )
    }

    export default Footer