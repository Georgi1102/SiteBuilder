import React, { useState } from "react";
import Active from "./Active";

function Theme({ primary, secondary, onClick }) {
  return (
    <div className="flex flex-row max-w-40 max-h-20 m-4" onClick={onClick}>
      <div className={`w-20 h-20 border-2 border-secondary rounded-sm ${primary}`}></div>
      <div className={`w-20 h-20 border-2 border-secondary rounded-sm ${secondary}`}></div>
    </div>
  );
}

export default function ChooseTheme({ active }) {
  const [primary, setPrimary] = useState("bg-primary")
  const [outline, setOutline] = useState("outline-secondary")
  const [secondary, setSecondary] = useState("bg-secondary")

  function changeColors(primary, secondary, outline) {
    setPrimary(primary);
    setSecondary(secondary);
    setOutline(outline);
  }

  return (
    <Active active={active}>
      <div className="flex justify-center items-center my-5">
        <div className={`w-[90vw] h-[calc(100vh-8rem)] ${primary} outline outline-4 ${outline} rounded-xl flex flex-row`} >
          <div className={`w-1/3 block ${secondary}`} >Menu</div>
          <div className="w-2/3 flex flex-wrap justify-center items-center p-8 overflow-auto">
            <Theme primary="bg-red-600" secondary="bg-gray-800" onClick={() => changeColors("bg-red-600", "bg-gray-800", "outline-gray-800")} />
            <Theme primary="bg-[#AF8D86]" secondary="bg-[#5F4842]" onClick={() => changeColors("bg-[#AF8D86]", "bg-[#5F4842]", "outline-[#5F4842]")} />
            <Theme primary="bg-[#AFBED1]" secondary="bg-[#EAC5D8]" onClick={() => changeColors("bg-[#AFBED1]", "bg-[#EAC5D8]", "outline-[#EAC5D8]")} />
            <Theme primary="bg-[#364156]" secondary="bg-[#7D4E57]" onClick={() => changeColors("bg-[#364156]", "bg-[#7D4E57]", "outline-[#7D4E57]")} />
            <Theme primary="bg-[#0E79B2]" secondary="bg-[#BF1363]" onClick={() => changeColors("bg-[#0E79B2]", "bg-[#BF1363]", "outline-[#BF1363]")} />
            <Theme primary="bg-[#0E79B2]" secondary="bg-[#BF1363]" onClick={() => changeColors("bg-[#0E79B2]", "bg-[#BF1363]", "outline-[#BF1363]")} />
          </div>
        </div>
      </div>
    </Active>
  );
}
