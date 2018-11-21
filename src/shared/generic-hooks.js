import React, {useEffect, useState} from 'react';

export const useElementSize = (element: React.Ref<any>): ClientRect => {
  const [elSize, setElSize] = useState(null);

  useEffect(
  () => {
    console.log(element);
    const resizeListener = () => {
      if (element && element.current) {
        setElSize(element.current.getBoundingClientRect());
      }
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  },
  [element]);

  return elSize;
};
