import React from "react";

export const Footer = () => {
  return (
    <div className=" flex place-content-between  py-2 border my-2 mt-4">
      <span>© 2023, made with by Creative Tim for a better web.</span>

      <ul className="flex place-content-evenly gap-8 text-base">
        <li className="cursor-pointer">Creative Tim </li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer"> License</li>
      </ul>
    </div>
  );
};
