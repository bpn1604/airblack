import React, { useEffect, useRef, useState } from "react";
import {
  CITIES_OPTIONS,
  COUNTRIES_DIAL_CODES,
  GOAL_OPTIONS,
  PROFESSION_OPTIONS,
} from "../constants";
// import "./assets/tick.svg"
// console.log(./assets/tick.svg)
const FormComponent = () => {
  return (
    <div className="text-white flex flex-col gap-2 bg-black p-6 pt-5 pb-[30px] font-proxima">
      <h1 className="drop delay-200 text-2xl leading-[30px] font-rocaone">
        Professional Online <br /> Makeup Course
      </h1>
      <div className="text-xs flex gap-3 drop delay-300">
        <div className="gap-1 flex items-center text-[#FAFAFA] bg-[#FFFFFF24] py-2 px-3 rounded-[5px]">
          
          <svg
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="17.4702" r="17.0702" fill="#CA3660" />
            <path
              d="M17.8191 6.7355C17.8678 6.58572 18.0796 6.58572 18.1283 6.7355L20.4009 13.7299C20.4227 13.7969 20.4851 13.8423 20.5556 13.8423H27.9099C28.0674 13.8423 28.1329 14.0438 28.0055 14.1364L22.0557 18.4592C21.9987 18.5006 21.9749 18.5739 21.9966 18.6409L24.2693 25.6354C24.3179 25.7851 24.1465 25.9097 24.0191 25.8171L18.0693 21.4943C18.0123 21.4529 17.9351 21.4529 17.8781 21.4943L11.9283 25.8171C11.8009 25.9097 11.6295 25.7851 11.6781 25.6354L13.9508 18.6409C13.9725 18.5739 13.9487 18.5006 13.8917 18.4592L7.9419 14.1364C7.81449 14.0438 7.87997 13.8423 8.03745 13.8423H15.3918C15.4623 13.8423 15.5247 13.7969 15.5465 13.7299L17.8191 6.7355Z"
              fill="#F5F5F5"
            />
          </svg>
          Certification Programme
        </div>
        <div className="gap-1 flex items-center text-[#F7C852]">
          
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_119)">
              <g clip-path="url(#clip1_1_119)">
                <path
                  d="M10.7309 4.68569L7.50703 4.23666L6.06586 1.43658C6.02651 1.35992 5.96174 1.29786 5.88174 1.26013C5.68111 1.16522 5.43734 1.24431 5.33703 1.43658L3.89586 4.23666L0.671977 4.68569C0.583093 4.69786 0.501829 4.73802 0.439611 4.79886C0.364393 4.87296 0.322945 4.97263 0.324374 5.076C0.325802 5.17935 0.369991 5.27798 0.44723 5.35013L2.77975 7.52958L2.22868 10.6071C2.21576 10.6787 2.22403 10.7523 2.25255 10.8197C2.28107 10.8869 2.32869 10.9453 2.39003 10.9879C2.45137 11.0306 2.52396 11.056 2.59958 11.0612C2.6752 11.0664 2.75081 11.0511 2.81785 11.0172L5.70142 9.56424L8.58503 11.0172C8.66376 11.0573 8.75519 11.0707 8.84281 11.0561C9.06374 11.0196 9.21228 10.8189 9.17421 10.6071L8.62315 7.52958L10.9557 5.35013C11.0192 5.29048 11.061 5.21259 11.0737 5.12742C11.108 4.91447 10.9531 4.71733 10.7309 4.68569Z"
                  fill="#F7C852"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_119">
                <rect
                  width="11"
                  height="10.56"
                  fill="white"
                  transform="translate(0.160004 0.920166)"
                />
              </clipPath>
              <clipPath id="clip1_1_119">
                <rect
                  width="11"
                  height="10.56"
                  fill="white"
                  transform="translate(0.160004 0.920166)"
                />
              </clipPath>
            </defs>
          </svg>
          Rated 4.85/5
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <BulletPoint index={1} title={"India’s No.1 Online Makeup Course"} />
        <BulletPoint index={2} title={"Learn by LIVE Do-it-Together Classes"} />
        <BulletPoint
          index={3}
          title={"Unlimited Practise Session to master skills"}
        />
      </div>
      <Form title={"Fill the form below to enquire"} />
    </div>
  );
};

export default FormComponent;

const BulletPoint = ({ title, index = 1 }) => {
  return (
    <div className="flex items-center gap-2 drop">
      <img
        alt="tick"
        src="data:image/jpeg;base64,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"
        width={10}
      />
      <p className="text-sm leading-4 text-lightGray">{title}</p>
    </div>
  );
};

const Form = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
    profession: "",
    goal: "",
  });
  return (
    <div className="w-full bg-white z-10 rounded-[10px] mt-4 font-pingfang drop">
      <div className="w-full h-full  text-white py-2.5 font-proxima flex rounded-t-[10px] justify-center font-[700] bg-[#E84D84] text-xs">
        {title.toUpperCase()}
      </div>
      <div className="p-2.5 gap-4 flex flex-col">
        <InputLabel title={"*Enter your name"}>
          <div className="border border-[#D9D9D9] flex px-3 py-2 rounded-[4px]">
            <input
              type="text"
              placeholder="Eg. Aneesha Mehra"
              value={formData.name}
              onChange={(e) => {
                if (e.target.value.length > 30) {
                  return;
                }
                setFormData({ ...formData, name: e.target.value });
              }}
              className="outline-none text-sm placeholder-[#BFBFBF] w-full"
            />
          </div>
        </InputLabel>
        <InputLabel title={"*Enter your WhatsApp Number"}>
          <div className="flex w-full gap-2">
            <div className="w-16">
              <Dropdown options={COUNTRIES_DIAL_CODES} placeholder="+91" />
            </div>
            <div className="border border-[#D9D9D9] flex px-3 py-2 flex-1 rounded-[4px]">
              <input
                type="number"
                value={formData.phoneNumber}
                onChange={(e) => {
                  if (e.target.value.length > 10) {
                    return;
                  }
                  setFormData({
                    ...formData,
                    phoneNumber: e.target.value,
                  });
                }}
                placeholder="Eg. 0000000000"
                className="outline-none text-sm placeholder-[#BFBFBF] w-full"
              />
            </div>
          </div>
        </InputLabel>
        <DropdownInput
          title={"*Select your profession"}
          options={PROFESSION_OPTIONS}
        />
        <DropdownInput title={"*Select your goal"} options={GOAL_OPTIONS} />
        <DropdownInput title={"*Select your city"} options={CITIES_OPTIONS} />
        <button className="bg-buttonBg font-proxima p-2.5 rounded-[4px] font-[700]">
          Submit
        </button>
      </div>
    </div>
  );
};

const InputLabel = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-[11px] text-[#505050]">
      <span className="text-sm font-semibold">{title}</span>
      {children}
    </div>
  );
};

const DropdownInput = ({ title, options }) => {
  return (
    <InputLabel title={title}>
      <Dropdown options={options} />
    </InputLabel>
  );
};

const Dropdown = ({
  options,
  placeholder = "Choose the most relevant option",
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const divRef = useRef(null);
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpen(false);
      return;
    }
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      setOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="border border-[#D9D9D9] px-3 py-2.5 rounded-[4px] relative">
      <div className="flex items-center z-0 justify-between" ref={dropdownRef}>
        <span
          className={`${selected ? "text-black" : "text-[#BFBFBF]"} text-sm`}
        >
          {selected ? selected : placeholder}
        </span>
        {/* <img alt="down" src="/down.svg" width={12} /> */}
      </div>
      {open && (
        <div
          ref={divRef}
          className="w-full left-0 z-[1000] rounded-[10px] border border-[#D9D9D9] bg-white absolute top-[calc(100%+5px)] flex flex-col"
        >
          {options.map((option) => (
            <div
              className="flex items-center p-4 justify-between"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              <span className="text-black text-sm">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
