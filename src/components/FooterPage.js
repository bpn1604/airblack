import React from "react";
import Background from "./Background";
import Heading from "./Heading";

const FooterPage = () => {
  return (
    <div className="flex w-full z-0 h-fit flex-col items-center justify-center gap-8 py-[30px] px-6 overflow-hidden relative">
      <Heading title={"Why Should You Join Airblack?"} />
      <div className="w-full flex gap-3 justify-between drop">
      <div className="flex flex-col items-center">
        <svg
          width="36"
          height="35"
          viewBox="0 0 36 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="17.4702" r="17.0702" fill="#CA3660" />
          <path
            d="M15.2328 12.0847C16.0469 11.5277 18.0606 10.7479 19.6031 12.0847"
            stroke="#F5F5F5"
            stroke-width="1.2193"
            stroke-linecap="round"
          />
          <rect
            x="9.65335"
            y="14.6266"
            width="12.6206"
            height="11.043"
            rx="0.812866"
            fill="#F5F5F5"
          />
          <path
            d="M12.0197 10.9281C13.9049 8.95716 18.678 6.19785 22.6885 10.9281"
            stroke="#F5F5F5"
            stroke-width="1.2193"
            stroke-linecap="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.0627 16.8263V23.5794L25.6347 25.5479C26.1695 25.9572 26.9415 25.5758 26.9415 24.9023L26.9415 15.5034C26.9415 14.83 26.1695 14.4486 25.6347 14.8579L23.0627 16.8263Z"
            fill="#F5F5F5"
          />
        </svg>

        <IconAndTitle icon="/camera.svg" title="Do-it-together, live on zoom" />
        </div>
        <div className="flex flex-col items-center">
        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="17.4702" r="17.0702" fill="#CA3660"/>
<path d="M17.8191 6.7355C17.8678 6.58572 18.0796 6.58572 18.1283 6.7355L20.4009 13.7299C20.4227 13.7969 20.4851 13.8423 20.5556 13.8423H27.9099C28.0674 13.8423 28.1329 14.0438 28.0055 14.1364L22.0557 18.4592C21.9987 18.5006 21.9749 18.5739 21.9966 18.6409L24.2693 25.6354C24.3179 25.7851 24.1465 25.9097 24.0191 25.8171L18.0693 21.4943C18.0123 21.4529 17.9351 21.4529 17.8781 21.4943L11.9283 25.8171C11.8009 25.9097 11.6295 25.7851 11.6781 25.6354L13.9508 18.6409C13.9725 18.5739 13.9487 18.5006 13.8917 18.4592L7.9419 14.1364C7.81449 14.0438 7.87997 13.8423 8.03745 13.8423H15.3918C15.4623 13.8423 15.5247 13.7969 15.5465 13.7299L17.8191 6.7355Z" fill="#F5F5F5"/>
</svg>

        <IconAndTitle icon="/starBadge.svg" title="4.8 /5 Rated Classes" />
        </div>
        
        <div className="flex flex-col items-center">
        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="17.4702" r="17.0702" fill="#CA3660"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5993 17.5595C19.3389 17.5595 20.7492 16.1492 20.7492 14.4096C20.7492 12.67 19.3389 11.2598 17.5993 11.2598C15.8597 11.2598 14.4495 12.67 14.4495 14.4096C14.4495 16.1492 15.8597 17.5595 17.5993 17.5595ZM28.099 14.9344C28.099 16.0942 27.1588 17.0343 25.9991 17.0343C24.8393 17.0343 23.8992 16.0942 23.8992 14.9344C23.8992 13.7747 24.8393 12.8345 25.9991 12.8345C27.1588 12.8345 28.099 13.7747 28.099 14.9344ZM10.2497 22.0217C10.2497 20.5833 10.9426 19.3024 12.0031 18.5044C11.5726 18.2419 11.0581 18.0844 10.5121 18.0844H7.88726C6.29133 18.0844 4.99989 19.3759 4.99989 20.9718V21.4968C4.99989 21.9272 5.35688 22.2842 5.78736 22.2842H10.2497V22.0217ZM10.0999 17.0343C11.2597 17.0343 12.1998 16.0942 12.1998 14.9344C12.1998 13.7747 11.2597 12.8345 10.0999 12.8345C8.94017 12.8345 8.00002 13.7747 8.00002 14.9344C8.00002 16.0942 8.94017 17.0343 10.0999 17.0343ZM30.1987 21.4968V20.9718C30.1987 19.3759 28.9073 18.0844 27.3114 18.0844H24.6865C24.1405 18.0844 23.6261 18.2419 23.1956 18.5044C24.256 19.3024 24.949 20.5833 24.949 22.0217V22.2842H29.4113C29.8418 22.2842 30.1987 21.9272 30.1987 21.4968ZM14.7119 19.1344H20.4866C22.0794 19.1344 23.374 20.429 23.374 22.0218V23.5967C23.374 24.0314 23.0212 24.3842 22.5865 24.3842H12.612C12.1773 24.3842 11.8245 24.0314 11.8245 23.5967V22.0218C11.8245 20.429 13.1191 19.1344 14.7119 19.1344Z" fill="#F5F5F5"/>
</svg>

        <IconAndTitle icon="/community.svg" title="35000+ Members" />
        </div>
        
      </div>
      <button className="drop bg-buttonBg font-proxima text-white w-full p-2.5 rounded-[4px] font-[700]">
        Apply Now
      </button>
      <Background center={true} />
    </div>
  );
};

export default FooterPage;

const IconAndTitle = ({ icon, title }) => {
  return (
    <div className="text-white flex-1 text-center font-proxima flex flex-col text-sm items-center gap-2">
      {/* <img alt="bg" src={icon} width={34} /> */}
      <span>{title}</span>
    </div>
  );
};
