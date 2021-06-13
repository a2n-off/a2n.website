import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/cursor.scss';

function Cursor() {

  const [active, setActive] = useState(false);

  function parallaxCursor(event: MouseEvent, movement: number) {
    if (event.target) {
      const pos = { x: 0, y: 0 };
      const ball = document.querySelector('.cursor__circle--big');
      const rect = (event.target as Element).getBoundingClientRect();
      const relX = event.pageX - rect.left;
      const relY = event.pageY - rect.top;
      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
      gsap.to(ball, 0.3, { x: pos.x, y: pos.y });
    }
  }

  function updatePosition() {
    const ball = document.querySelector('.cursor__circle--big');
    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    if (!active) {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      gsap.set(ball, { x: pos.x, y: pos.y });
    }
  }

  /**
   * move the cursor
   * @param {MouseEvent} event the mouse event
   * @return {void}
   */
  function onMouseMove(event: MouseEvent) {
    const bigCircle = document.querySelector('.cursor__circle--big');
    const smallCircle = document.querySelector('.cursor__circle--small');

    gsap.to(bigCircle, .4, {
      x: event.clientX,
      y: event.clientY
    })

    gsap.to(smallCircle, .1, {
      x: event.clientX,
      y: event.clientY
    })

    const target = event.target as HTMLElement;
    if (target.className === 'hoverable') {
      parallaxCursor(event, 3);
    }
  }

  /**
   * animation for in - hover an element
   * return {void}
   */
  function onMouseHover() {
    const bigCircle = document.getElementById('bigCircle');
    gsap.to(bigCircle, {
      attr: {
        r: 25
      }
    })
    setActive(true);
    updatePosition();
  }

  /**
   * animation for out - hover an element
   * return {void}
   */
  function onMouseHoverOut() {
    const bigCircle = document.getElementById('bigCircle');
    gsap.to(bigCircle, {
      attr: {
        r: 18
      }
    })
    setActive(false);
  }

  /**
   * add event listener for each element
   * return {void}
   */
  function setHoverable() {
    const hoverables = document.querySelectorAll('.hoverable');
    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }
  }

  useEffect(() => {
    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    // set hover elem
    setHoverable();
  }, [])

  return (
    <div className='cursor hide-in-mobile-and-tablet'>
      <div className="cursor__circle cursor__circle--big">
        <svg height="60" width="60">
          <circle id="bigCircle" cx="30" cy="30" r="18" strokeWidth="0.8"> </circle>
        </svg>
      </div>

      <div className="cursor_circle cursor__circle--small">
        <svg height="10" width="10">
          <circle cx="4" cy="4" r="3" strokeWidth="0"> </circle>
        </svg>
      </div>
    </div>
  )
}

export default Cursor;
