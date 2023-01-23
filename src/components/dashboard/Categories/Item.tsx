import React, { ForwardedRef } from "react";
import { CaretRight } from "phosphor-react";
import { IconType } from "antd/es/notification/interface";

type Props = {
  icon: JSX.Element;
  title: string;
  description: React.ReactNode;
};

export const Item: React.FC<Props> = ({ title, description, icon }) => {
  const Icon = React.cloneElement(icon, {
    size: 20,
    color: 'white',
    wheight: 'bold'
  });

  return (
    <div className="group hover:bg-gray-100 p-4 rounded-md cursor-pointer flex justify-between items-center">
      <div className="flex gap-4">
        <div className="bg-black rounded-md p-2 flex place-content-center">
          {Icon}
        </div>
          
        <div className="flex flex-col">
        <h3 className="text-md text-zinc-600">{title}</h3>
        {description}
        </div>
      </div>

      <div className="flex   justify-center items-center"></div>
      <CaretRight
        weight="bold"
        className="group-hover:duration-200 group-hover:translate-x-3 rounded-md  cursor-pointer transition-all duration-200 hover:translate-x-3"
      />
    </div>
  );
};
