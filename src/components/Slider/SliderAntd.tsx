import { Carousel, CarouselProps } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { images } from "./mocks";

type Props = {
  imgArray?: string[];
};

export const SliderAntd: React.FC<Props> = ({ imgArray = images }) => {
  const [dotPosition] = useState<CarouselProps['dotPosition']>('top')

  const imageDto = imgArray.map(image => ({ image, title: 'Lorem ipsum dolor', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }))


  return (
    <Carousel autoplay  className="rounded-lg" dotPosition={dotPosition}>
      {imageDto.map((img) => (
        <div className=" relative rounded-lg" key={img.title}>
          <img height={500} className="relative rounded-lg" src={img.image} />
          <span className="absolute bottom-12 left-12 text-white text-lg">{img.title}</span>
          <span className="absolute bottom-6 left-12 text-white">{img.description}</span>
        </div>
      ))}
    </Carousel>
  );
};
