import React from "react";
import { Item } from "./Item";

export const SalesByCountry = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="mb-4 text-slate-700 text-base font-semibold">
        Sales By Country
      </h3>
      <div className="flex flex-col gap-4">
        <Item
          country="Brazil"
          bounce={32.14}
          value={143.96}
          countryUrl="/public/country/br.png"
          sales={562}
        />
        <Item
          country="United States"
          bounce={32.14}
          value={143.96}
          countryUrl="/public/country/us.webp"
          sales={562}
        />
        <Item
          country="Germany"
          bounce={32.14}
          value={143.96}
          countryUrl="/public/country/de.webp"
          sales={562}
        />
        <Item
          country="Great Brain"
          bounce={32.14}
          value={143.96}
          countryUrl="/public/country/gb.webp"
          sales={562}
        />
      </div>
    </div>
  );
};
