import React from "react";

type Props = {
  country: string;
  countryUrl: string;
  sales: number;
  value: number;
  bounce: number;
};


export const Item: React.FC<Props> = ({ bounce,country, countryUrl, sales, value }) => {
  return (
    <div className="flex gap-12 justify-between items-center">
      <div className="flex items-center gap-6 flex-row w-[140px]">
        <div>
          <img src={countryUrl} />
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm text-zinc-400">Country:</h4>
        <span className="text-md font-semibold  -mt-1.5 text-zinc-600">{country}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm text-zinc-400">Sales:</h4>
        <span className="text-md font-semibold  -mt-1.5 text-zinc-600">{sales}</span>
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm text-zinc-400">Value:</h4>
        <span className="text-md font-semibold  -mt-1.5 text-zinc-600">${value}</span>
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm text-zinc-400">Bounce:</h4>
        <span className="text-md font-semibold  -mt-1.5 text-zinc-600">{bounce}</span>
      </div>
     
    </div>
  );
};
