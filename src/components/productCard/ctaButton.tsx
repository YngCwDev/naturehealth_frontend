import React from "react";

type ctaContent = {
  action: string;
  name: string;
  className: string;
  icon: boolean;
  children: React.ReactNode;
};

const CtaButton = ({ action, name, className, icon, children }: ctaContent) => {
  return (
    <button
      onClick={() => action}
      className={`flex w-full sm:w-auto  transition-all items-center justify-center gap-2 p-3 sm:p-4 px-6 rounded-full cursor-pointer ${className}`}
    >
      <p className="text-sm sm:text-base md:flex hidden">{name}</p>
      {icon && children}
    </button>
  );
};

export default CtaButton;
