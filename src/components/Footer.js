import React from "react";
import Background from "./Background";

const Footer = () => {
  return (
    <div className="flex w-full h-fit flex-col gap-6 items-center justify-center py-14 px-10 overflow-hidden relative">
      <h1 className="text-grayWhite text-2xl w-52 text-center font-rocaone drop">
        Join our growing community of 35,000
        <span className="text-grayWhite text-2xl text-center font-proxima">
          +{" "}
        </span>
        alumni
      </h1>
      <button className="bg-buttonBg drop p-2.5 w-full text-white font-proxima rounded-[4px] font-[700]">
        Apply Now
      </button>
      <div className="flex gap-[17.35px] mt-1 drop">
        <img src="https://th.bing.com/th?id=OIP.mdNMeNAxQL1gWv0U3KAe1gHaHZ&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={35} alt="instagram" />
        <img src="https://th.bing.com/th?id=OIP.XFQn26nBqYC4w7TQEV3aKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={35} alt="facebook" />
        <img src="https://th.bing.com/th?id=OIP.8IxSTRR_RjmMtUAT7nAT7gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={35} alt="linkedin" />
        <img src="https://th.bing.com/th?id=OIP.Lcag4KigiB7D4179fFQcegHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={35} alt="twitter" />
      </div>
      <Background center={true} />
    </div>
  );
};

export default Footer;
