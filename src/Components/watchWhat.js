import React from 'react'
import Cohorts from "../images/Cohorts.png";
import vector from "../images/Vector.png"

function WatchWhat() {
  return (
    <div className="flex">
      <img src={Cohorts} alt="cohort" />
      <div className="pr-0">
        <img src={vector} alt="Vector" />
        <div className="text-[31px] text-[#F2F2F2] font-Inter">Watch what the whales are doing</div>
        <div className="text-[19px] text-[#F2F2F2] opacity-70">All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</div>
      </div>
    </div>
  )
}

export default WatchWhat
