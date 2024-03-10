"use client";

import React from "react";
import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

export default function Skillset({ skillset }: any) {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {skillset.map((tech: any, index: number) => {
              return (
                <div
                  key={tech.category}
                  ref={stackRef}
                  className="flex flex-col gap-4 flex-1 md:flex-auto"
                  style={{
                    transform: isStackInView
                      ? "none"
                      : `${
                          index === 0
                            ? "translateY(50px)"
                            : `translateY(${50 / index}px)`
                        }`,
                    opacity: isStackInView ? 1 : 0,
                    transition: `all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                      index === 0 ? 0 : 0.3 * index
                    }s`,
                  }}
                >
                  <h3 className="text-xl font-semibold text-center">{tech.category}</h3>
                  <div className="flex items-center flex-wrap gap-x-5 gap-y-8">
                    {tech.items.map((item: any) => (
                      <div key={item.name} className="group relative flex">
                        <span role="img">{item.icon}</span>
                        <span
                          className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
    -translate-x-1/2 translate-y-full opacity-0 mt-4 mx-auto px-2 w-max"
                        >
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
    </LazyMotion>
  );
}
