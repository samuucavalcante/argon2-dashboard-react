import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 w-screen h-[300px]  bg-indigo-500" />
      <div className="relative z-10 px-6 pt-4">{children}</div>
    </div>
  );
};
