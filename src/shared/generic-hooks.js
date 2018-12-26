import React, {useEffect, useState} from 'react';

export const useElementSize = (element: React.Ref<any>, width): ClientRect => {
  const [elSize, setElSize] = useState(null);

  useEffect(
  () => {
    const resizeListener = () => {
      setTimeout(() => {
        if (element && element.current) {
          setElSize(element.current.getBoundingClientRect());
        }
        // This is rather bothersome. It seems there's some error with `useWidth` being fairly delayed,
        // causing some animation delay. We're using setTimeout to make sure our code runs after that
      }, 0);
    };
    resizeListener();

    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  },
  [element, width]);

  return elSize;
};

export const useIsSmall = (width) => {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => setIsSmall(width === 'sm' || width === 'xs'), [width]);
  return isSmall;
};
