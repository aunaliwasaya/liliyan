import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lightlogo from "../assets/lightlogo.svg";
import openclose from "../assets/openclose.svg";
import unified from "../assets/unified.svg";
import chevron from "../assets/chevron.svg";
import { admin, engines, otherEngine } from "../utils/demodata";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (itemId, url = null) => {
    setSelectedItem(itemId);
    if (url) {
      navigate(url);
    }
  };

  const navigatetohome = () => {
    setSelectedItem(null);
    navigate("/home");
  };

  return (
    <aside className="w-80 bg-[#0056B3] text-white fixed overflow-y-scroll h-screen">
      <div className="p-6 flex justify-between items-center">
        <img src={lightlogo} alt="logo" />
        <img src={openclose} alt="toggle" />
      </div>

      <div
        onClick={navigatetohome}
        className={`cursor-pointer ${
          selectedItem === null
            ? "border-[1px] border-[#80B7F3] rounded-[14px] py-2 mx-4 bg-gradient-to-r from-[#0051A8] to-[#007BFF]"
            : ""
        } flex`}
      >
        <img src={unified} className="px-2 mx-4" alt="unified" />
        <p className="font-[600] text-[18px]">Unified Engine</p>
      </div>

      <ul className="space-y-2 mt-4 w-[95%]">
        <li className="font-semibold p-4">Try Out Our Engines</li>
        {engines.map((engine, index) => (
  <li
    key={index}
    className={`p-2 rounded-[14px] flex items-center ml-2 cursor-pointer ${
      selectedItem === index
        ? "border-[1px] border-[#80B7F3] bg-gradient-to-r from-[#0051A8] to-[#007BFF]"
        : "hover:bg-blue-800"
    }`}
    onClick={() => handleItemClick(index, engine.url)} // Pass the URL here
  >
    <img src={engine.icon} className="w-[18px] h-[18px] mx-2" alt="icon" />
    <p className="font-[600] text-[15px]">{engine.title}</p>
  </li>
))}
        <div className="h-[1px] justify-center w-[95%] mx-auto flex items-center bg-[#80B7F3]"></div>

        {otherEngine.map((item, index) => (
          <li
            key={index + engines.length}
            className={`p-2 rounded-[14px] flex items-center ml-2 cursor-pointer ${
              selectedItem === index + engines.length
                ? "border-[1px] border-[#80B7F3] bg-gradient-to-r from-[#0051A8] to-[#007BFF]"
                : "hover:bg-blue-800"
            }`}
            onClick={() => handleItemClick(index + engines.length, item.url)}
          >
            <img src={item.icon} className="w-[18px] h-[18px] mx-2" alt="icon" />
            {item.title}
          </li>
        ))}
        <div className="h-[1px] justify-center w-[95%] mx-auto flex items-center bg-[#80B7F3]"></div>

        <li
          className="flex justify-between items-center pr-8 cursor-pointer rounded-[14px]"
          onClick={() => handleItemClick("admin")}
        >
          <div
            className={`font-semibold p-4`}
          >
            Admin Area
          </div>
          <img src={chevron} alt="chevron" />
        </li>
        {selectedItem === "admin" &&
          admin.map((item, index) => (
            <li
              key={index}
              className={`px-2 py-2 cursor-pointer hover:bg-blue-800 rounded flex items-start ${
                selectedItem === `admin-${index}`
                  ? "border-[1px] rounded-[14px] border-[#80B7F3] bg-gradient-to-r from-[#0051A8] to-[#007BFF]"
                  : ""
              }`}
              onClick={() => handleItemClick(`admin-${index}`)}
            >
              <img src={item.icon} className="w-[18px] h-[18px] mx-2" alt="icon" />
              <div className="flex flex-col">
                <p className="font-[600] text-[15px]">{item.title}</p>
                {item.subItems && (
                  <ul className="mt-2 space-y-1 text-blue-200">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`cursor-pointer hover:text-blue-300 ${
                          selectedItem === `admin-sub-${index}-${subIndex}`
                            ? "border-[1px] rounded-[14px] border-[#80B7F3] bg-gradient-to-r from-[#0051A8] to-[#007BFF]"
                            : ""
                        }`}
                        onClick={() =>
                          handleItemClick(`admin-sub-${index}-${subIndex}`)
                        }
                      >
                        {subItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
