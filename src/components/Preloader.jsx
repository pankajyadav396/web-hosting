import React, { useEffect, useState } from "react";
import Navlogo from "../assets/images/nav-logo.webp"
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-white top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center items-center flex-col text-center ">
                        <img className="max-w-[150px] w-full animate-bounce" src={Navlogo} alt="Navlogo" />
                        <p className="italic text-[60px] font-[900] font-inter animate-bounce">LEMON<span className="text-red-700">WARES</span></p>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;