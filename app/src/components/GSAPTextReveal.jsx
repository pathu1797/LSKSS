"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function GSAPTextReveal({
  children,
  as: Component = "div",
  className = "",
  splitBy = "chars",
  ...props
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    // Determine split types based on the prop
    const types = splitBy === "chars" ? "words, chars" : "words";
    const split = new SplitType(textElement, { types });

    // Target either chars or words for animation
    const targets = splitBy === "chars" ? split.chars : split.words;

    // Ensure the elements are visible but translated down for the reveal
    gsap.set(targets, {
      y: 130,
      skewY: 5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%", // Trigger when top of container hits 85% of viewport
      },
    });

    // Make container visible
    tl.set(container, { autoAlpha: 1 });

    tl.to(targets, {
      y: 0,
      skewY: 0,
      stagger: 0.03,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => {
      split.revert();
      tl.kill();
    };
  }, [splitBy]);

  return (
    <Component
      ref={containerRef}
      className={`reveal-text-container overflow-hidden invisible ${className}`}
      {...props}
    >
      <span ref={textRef} className="inline-block">
        {children}
      </span>
    </Component>
  );
}

