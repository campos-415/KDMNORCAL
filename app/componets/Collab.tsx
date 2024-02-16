import Image from "next/image";
import React from "react";
import DecentImage from "../../public/decent.png";
import KdmImage from "../../public/KDMcolorWhite.png";
import xImage from "../../public/X.png";
import Link from "next/link";

function Collab() {
  return (
    <div className="flex items-center flex-col justify-center md:my-4 md:w-[400px] text-center">
      <h3 className="text-white text-xl animate-fade-in-3">
        Check our Most Recent Collab!
      </h3>
      <Link target="_blank" href="https://decentsf.com/products/lovergirl-x-kdmnorcal-collab-tee">
        <div className="flex items-center justify-center flex-1 animate-fade-in-3 cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] p-3 md:p-10 transition duration-200 ease-out">
          <Image
            src={DecentImage}
            alt="collab image"
            width={200}
            height={200}
          />
          <Image src={xImage} alt="collab image" width={25} height={25} />
          <Image src={KdmImage} alt="collab image" width={100} height={100} />
        </div>
      </Link>
    </div>
  );
}

export default Collab;
