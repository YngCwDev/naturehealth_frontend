import Image from "next/image";
import Link from "next/link";
import React from "react";

type responsiveness = {
  lg?: string | null;
  md?: string | null;
  sm?: string | null;
};
const Banner = ({ lg, md, sm }: responsiveness) => {
  return (
    <div>
      <Link href={"/"}>
        {lg != null && (
          <Image
            src={"/" + lg}
            alt="prostate banner"
            width={1920}
            height={1080}
            className="w-full lg:flex hidden"
          />
        )}
        {md != null && (
          <Image
            src={"/" + md}
            alt="prostate banner"
            width={1920}
            height={1080}
            className="w-full lg:hidden md:flex hidden"
          />
        )}

        {sm != null && (
          <Image
            src={"/" + sm}
            alt="prostate banner"
            width={1920}
            height={1080}
            className="w-screen md:hidden"
          />
        )}
      </Link>
    </div>
  );
};

export default Banner;
