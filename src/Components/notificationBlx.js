// Carousel.js
import React, { useEffect, useRef, useState } from "react";
import "./Rotating.css"; // Import the CSS module
import bell from "../images/Bell.png";
import bar from "../images/bar.png";
import clock from "../images/clock.png";

const NotificationBlx = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      list.appendChild(duplicatedItem);
    });
  }, []);

  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id="container" data-animated>
      <ul ref={listRef} id="list">
        <li>
          <div>
            <div className="w-[189.7px] h-[171.5px] bg-white p-[20px] m-[20px] rounded-[8.4px]">
              <div className="flex flex-row">
                <img src={bell} alt="bell" />
                <button className="text-[#19191A] text-[9.1px] font-Inter">
                  Save
                </button>
              </div>
              <div className="text-[#19191A] text-[14px] font-Inter">
                {" "}
                We’ll be sending notifications to you here
              </div>
              <input
                type="text"
                id="emailInput"
                value={email}
                onChange={handleInputChange}
                placeholder="Your Email Address"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  border: isHovered ? "2px solid #3498db" : "1px solid #ccc",
                }}
                className="w-[161.7px] h-[35px] rounded-[5.6px] p-[8.4px] border-[#D4D4D4]"
              />
            </div>
          </div>
        </li>
        {/* 2nd card */}
        <li>
          <div>
            <div className="w-[189.7px] h-[171.5px] bg-white p-[20px] m-[20px] rounded-[8.4px]">
              <div className="flex flex-row">
                <img src={bar} alt="bar" />
                <button className="text-[#19191A] text-[9.1px] font-Inter">
                  Save
                </button>
              </div>
              <div className="text-[#19191A] text-[11.2px] font-Inter pt-6 pb-4">
                {" "}
                Notify me when any wallets move more than
              </div>
              <select name="money" className="w-[66.4px] h-[19.6px]">
                <option className="text-[9.1px]" value="1000">$1,000.00</option>
                <option className="text-[9.1px]" value="2000">$2,000.00</option>
              </select>
            </div>
          </div>
        </li>
        {/* 2nd card */}
        {/* 3rd card */}
        <li>
        <div>
            <div className="w-[189.7px] h-[171.5px] bg-white p-[20px] m-[20px] rounded-[8.4px]">
              <div className="flex flex-row">
                <img src={clock} alt="clock" />
                <button className="text-[#19191A] text-[9.1px] font-Inter">
                  Save
                </button>
              </div>
              <div className="text-[#19191A] text-[11.2px] font-Inter pt-6 pb-4">
                {" "}
                Notify me when any wallet dormant for
              </div>
              <select name="money" className="w-[80.4px] h-[21.6px]">
                <option className="text-[9.1px]" value="1000">&gt;30days</option>
                <option className="text-[9.1px]" value="2000">&lt;30days</option>
              </select>
            </div>
          </div>
        </li>
        {/* 3rd card */}
      </ul>
    </div>
  );
};

export default NotificationBlx;
