import { useEffect, useState } from "react";
import { Coordinates } from "../models";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return {
    mouseX: mousePosition.x,
    mouseY: mousePosition.y,
  };
};

export default useMousePosition;
