"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // suaviza o movimento
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  // estado para mudar o conteúdo do cursor quando passar por links
  const [cursorText, setCursorText] = useState<string>("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20); // metade do tamanho do cursor
      mouseY.set(e.clientY - 20);
    };
    window.addEventListener("mousemove", move);

    // cursor hover em links
    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => setCursorText("Clique aqui!"));
      el.addEventListener("mouseleave", () => setCursorText(""));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", () => setCursorText("Clique"));
        el.removeEventListener("mouseleave", () => setCursorText(""));
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`body { cursor: none !important; }`}</style>

      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
        }}
        className="fixed top-0 left-0 z-[9999] w-14 h-14 rounded-full bg-[#000000]/50 text-white flex items-center justify-center text-center pointer-events-none select-none font-normal text-xs"
      >
        {cursorText}
      </motion.div>
    </>
  );
}