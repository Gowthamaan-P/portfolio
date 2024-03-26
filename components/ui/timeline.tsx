"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Listicon from "@/components/ui/list_icon";
import Link from "next/link";

export function Lineitem({
  designation,
  institution,
  link,
  period,
  location,
  description,
}: any) {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between"
    >
      <Listicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {designation}&nbsp;
          <Link href={link} className="text-brand capitalize">
            &nbsp;@{institution}
          </Link>
        </h3>
        <span className="capitalize font-medium text-2sm text-gray-500">
          {period} | {location}
        </span>
        <p className="font-medium my-2 text-justify">{description}</p>
      </motion.div>
    </li>
  );
}

export const Timeline = ({ data, className = "" }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const items = data.map((element: any) => {
    return (
      <Lineitem
        key={element.key}
        designation={element.designation}
        institution={element.institution}
        link={element.link}
        period={element.period}
        location={element.location}
        description={element.description}
      />
    );
  });
  return (
    <div ref={ref} className={`my-8 relative ${className}`}>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-14 top-1 h-[96%] w-[3px] origin-top bg-brand/50"
      />
      <ul className="ml-40 flex flex-col items-start justify-between">
        {items}
      </ul>
    </div>
  );
};
