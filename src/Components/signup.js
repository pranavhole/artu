import React, { useState } from "react";

function Signup() {
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

  const handleSubmit = () => {
    if (isValidEmail(email)) {
      // Redirect to the specified URL
      window.location.href = "https://app.loch.one/welcome";
    } else {
      alert("Please enter a valid email.");
    }
  };

  const isValidEmail = (input) => {
    // Simple email validation using indexOf
    return input.indexOf("@") !== -1 && input.indexOf(".") !== -1;
  };

  return (
    <div className="w-[640px] bg-white h-screen z-10 relative justify-center items-center flex flex-col">
      <div className="text-[#B0B1B3] text-[39px] font-500">
        Sign up for exclusive access.
      </div>
      <div>
        <input
          type="text"
          id="emailInput"
          value={email}
          onChange={handleInputChange}
          placeholder="Your Email Address"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            border: isHovered ? "2px solid #E5E5E6" : "1px solid #E5E5E6",
            padding: "20px 24px",
          }}
          className="mt-5 opacity-60 w-[340px] h-[59px] rounded-[8px]"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="mt-10 flex flex-col w-[340px] h-[59px] border-1 rounded-[8px] bg-[#19191A] text-[16px] text-[#fff] justify-center items-center"
        >
          Get Started
        </button>
      </div>
      <div className="text-[16px] font-600 mt-10">You’ll receive an email with an invite link to join.</div>
      <div></div>
    </div>
  );
}

export default Signup;
