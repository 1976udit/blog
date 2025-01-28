import React from "react";

const Header = () => {
  return (
    <header className="gh-marketplace-hero bg-[#f9f9f9] h-[500px] my-0 overflow-hidden py-0 px-4 sm:px-6">
      <div className="my-0 mx-auto max-w-8xl w-full grid grid-cols-2">
        <div className="flex flex-col justify-center pr-16 h-[500px]">
          <h1 className="text-4xl sm:text-6xl">Ghost Marketplace</h1>
          <p className="mt-4 text-xl text-gray-500">
            Professional themes, custom integrations
            <br />
            and qualified experts
          </p>
        </div>
        <div className="gh-marketplace-hero-grid"></div>
      </div>
    </header>
  );
};

export default Header;
