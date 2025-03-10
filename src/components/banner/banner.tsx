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
          className="h-full w-full"
        />
      </Link>
    </div>
  );
};

export default Banner;
