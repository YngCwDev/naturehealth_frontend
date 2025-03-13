import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/Prostate.png"}
          alt="prostate banner"
          width={1920}
          height={1080}
          className="w-full lg:flex hidden"
        />
        <Image
          src={"/flyer_md.png"}
          alt="prostate banner"
          width={1920}
          height={1080}
          className="w-full lg:hidden md:flex hidden"
        />
        <Image
          src={"/flyer_sm.png"}
          alt="prostate banner"
          width={1920}
          height={1080}
          className="w-full md:hidden"
        />
      </Link>
    </div>
  );
};

export default Banner;
