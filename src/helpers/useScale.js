import { useEffect, useState } from "react";

export const useScale = (baseWidth = 1500) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < baseWidth) {
        setScale(viewportWidth / baseWidth);
      } else {
        setScale(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseWidth]);

  return scale;
};
