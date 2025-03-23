import { ctaContent } from "@/lib/types";

const CtaButton = ({ action, name, className, icon, children }: ctaContent) => {
  return (
    <button
      onClick={action}
      className={`flex w-full sm:w-auto  md:w-full transition-all items-center justify-center gap-2 p-3 sm:p-4 px-6 rounded-full cursor-pointer ${className}`}
    >
      <p className="text-sm sm:text-base md:flex ">{name}</p>
      {icon && children}
    </button>
  );
};

export default CtaButton;
