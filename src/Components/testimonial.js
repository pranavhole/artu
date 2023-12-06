import React, { useState } from 'react';
import logo from "../images/logo.png";

function Testimonial() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX - position.x);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newX = e.clientX - startX;
      
      // Restrict movement within the range of -700px to 700px
      const constrainedX = Math.min(Math.max(newX, -700), 700);

      setPosition((prevPosition) => ({
        x: constrainedX,
        y: prevPosition.y,
      }));
    }
  };

  return (
    <div className='flex flex-col w-[100%] justify-center items-center'>
      <div className='w-[90%] font-sans text-white font-medium text-2xl text-right'>Testimonials</div>
      <div className='w-[90%] h-[1px]  border-[#E5E5E6] border-[0.5px]'></div>
      <div className="flex">
        <img src={logo} className='h-[60px] w-[60px]' alt="logo" />
        <div
          className='testomony'
          style={{
            position: 'relative',
            left: position.x,
            top: position.y,
            cursor: dragging ? 'grabbing' : 'grab',
            transition: dragging ? 'none' : 'left 0.2s ease',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className='w-[353px] h-[136px] bg-white rounded-xl p-[20px] m-[20px]'>
            <div className='h-[19px] flex'>
              <div> Jack F</div>
              <div> Ex Blackrock PM</div>
            </div>
            <div>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</div>
          </div>
        </div>
        <div
          className='testomony'
          style={{
            position: 'relative',
            left: position.x,
            top: position.y,
            cursor: dragging ? 'grabbing' : 'grab',
            transition: dragging ? 'none' : 'left 0.2s ease',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className='w-[353px] h-[136px] bg-white rounded-xl p-[20px] m-[20px]'>
            <div className='h-[19px] flex'>
              <div> Jack F</div>
              <div> Ex Blackrock PM</div>
            </div>
            <div>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</div>
          </div>
        </div>
        <div
          className='testomony'
          style={{
            position: 'relative',
            left: position.x,
            top: position.y,
            cursor: dragging ? 'grabbing' : 'grab',
            transition: dragging ? 'none' : 'left 0.2s ease',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className='w-[353px] h-[136px] bg-white rounded-xl p-[20px] m-[20px]'>
            <div className='h-[19px] flex'>
              <div> Jack F</div>
              <div> Ex Blackrock PM</div>
            </div>
            <div>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</div>
          </div>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
}

export default Testimonial;
