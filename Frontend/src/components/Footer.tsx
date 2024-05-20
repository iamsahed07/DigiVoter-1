import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex items-center justify-center w-[100vw] h-8 bg-[#4C3EDA] fixed bottom-0 ">
      <h4 className="text-xs font-medium text-white">
        PROJECT B.Tech CSE - 2024 BY SAHED ALI
      </h4>
    </div>
  );
};

export default Footer;
