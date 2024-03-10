"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const Listicon = ({reference}:any) =>{

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
    });

    return (
        <figure className="absolute left-0 stroke-current">
            <svg className="-rotate-90 ml-[2.5px]" width="75" height="75" viewBox="0 0 100 100">
                <motion.circle cx="75" cy="75" r="20" className="stroke-[4px] fill-background stroke-cement"
                style={{
                    pathLength: scrollYProgress,
                }}/>
                <circle cx="75" cy="75" r="8" className="animate-pulse stroke- stroke-0 fill-brand/75"/>
            </svg>
        </figure>
    );
}

export default Listicon;