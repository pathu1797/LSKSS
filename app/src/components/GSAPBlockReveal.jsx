"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GSAPBlockReveal({
  children,
  className = "",
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    // Use a timeline for ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%", // adjust as needed
      },
    });

    // Animate the container itself
    tl.fromTo(
      container,
      {
        y: 130,
        skewY: 5,
        autoAlpha: 0,
      },
      {
        duration: 1.2,
        y: 0,
        skewY: 0,
        autoAlpha: 1,
        ease: "power3.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`invisible ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
