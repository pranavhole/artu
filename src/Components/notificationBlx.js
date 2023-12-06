// Carousel.js
import React, { useEffect,useRef } from 'react';
import  './Rotating.css'; // Import the CSS module

const NotificationBlx = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const listContent = Array.from(list.children);

    listContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      list.appendChild(duplicatedItem);
    });
  }, []);
  return (
    <div id="container" data-animated>
      <ul ref={listRef} id="list">
        <li>
          <div>
            hello
          </div>
        </li>
        <li>Second</li>
        <li>Third</li>
      </ul>
    </div>
  );
};

export default NotificationBlx;
