import { useEffect, useState } from "react";

export default function useCoords() {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [onItem, setOnItem] = useState(false);
  const [id, setId] = useState<string>("");
  const getMouse = (e: MouseEvent) => {
    e.preventDefault();
    if (!(e.target as HTMLElement).dataset.user) {
      return;
    }
    setCoord({ x: e.x, y: e.y });
    setOnItem(true);
    setId((e.target as HTMLElement).dataset.user!);
  };
  const clickOff = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).dataset.user) {
      setOnItem(false);
    }
  };
  useEffect(() => {
    document.addEventListener("contextmenu", getMouse);
    document.addEventListener("click", clickOff);
    return () => {
      document.removeEventListener("contextmenu", getMouse);
      document.removeEventListener("click", clickOff);
    };
  }, []);
  return { coord, onItem, id };
}
