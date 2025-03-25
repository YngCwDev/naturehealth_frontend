import { ctaContent } from "@/lib/types";

const CtaButton = ({ action, className, children }: ctaContent) => {
  return (
    <button
      onClick={action}
      className={`flex w-full sm:w-auto  md:w-full transition-all items-center min-h-[54px] max-h-[54px]  justify-center gap-2 p-3 sm:p-4 px-6 rounded-full cursor-pointer ${className}`}
    >
      <p className="text-sm sm:text-base  flex gap-2">{children}</p>
    </button>
  );
};

export default CtaButton;
