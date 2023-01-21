import React, { useCallback, useEffect, useState } from "react";
import { images } from "./mocks";
import { clsx } from "clsx";

type Props = {
  imgArry?: string[];
};

export const Slider: React.FC<Props> = ({ imgArry = images }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextSlider = useCallback(() => {
    setSliderIndex((old) => old + 1);
  }, []);

  const prevSlider = useCallback(() => {
    setSliderIndex((old) => old - 1);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {

      setSliderIndex((old) => {
        if(old === imgArry.length - 1) return 0
        return old + 1
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {imgArry.map((img, index) => (
        <img
          key={img}
          className={`${clsx({
            hidden: index !== sliderIndex,
            "opacity-0": index !== sliderIndex,
          })} absolute top-0 `}
          src={img}
        />
      ))}
      <button
        onClick={nextSlider}
        disabled={sliderIndex === imgArry.length - 1}
        className="non z-10 top-1/2 right-0 absolute p-2 text-white text-2xl"
      >
        {">"}
      </button>
      <button
        onClick={prevSlider}
        disabled={sliderIndex === 0}
        className="z-10 top-1/2 right-12 absolute text-white text-2xl p-2"
      >
        {"<"}
      </button>
    </div>
  );
};
