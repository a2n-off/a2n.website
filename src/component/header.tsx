import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = (props) => {
  const [widthP, setWidthP] = useState(0);
  const [heightP, setHeightP] = useState(0);
  const router = useRouter();

  /**
   * set the menu position and the menu shadow position
   * @param {number} paddingContainer
   * @param {number} paddingTop
   * @param {number} paddingLeft
   */
  function setMenuPosition(paddingContainer: number, paddingTop: number, paddingLeft: number) {
    const menu = document.getElementById('menu');
    const shadowMenu = document.getElementById('shadow-menu');
    // starting position (0) + padding card-container + padding grid
    menu.style.top = `${paddingContainer+paddingTop}px`;
    menu.style.left = `${paddingContainer+paddingLeft}px`;
    shadowMenu.style.top = `${paddingContainer+paddingTop}px`;
    shadowMenu.style.left = `${paddingContainer+paddingLeft}px`;
  }

  /**
   * draw a grid
   * @param {number} squareSize the size of the square
   * @param {number} margin the size of the inner grid margin
   * @param {string} color stroke color
   * @return {void}
   */
  function drawGrid(squareSize: number, margin: number, color: string): void {
    const grid = document.getElementById('grid-canvas') as HTMLCanvasElement;
    const container = document.getElementsByClassName('card-container');
    // @ts-ignore
    let ctx = grid.getContext('2d');

    let nX = Math.floor(widthP / squareSize) - 2;
    let nY = Math.floor(heightP / squareSize) - 2;
    let pX = widthP - nX * squareSize;
    let pY = heightP - nY * squareSize;
    let paddingLeft = pX / 2;
    let paddingRight = pX / 2;
    let paddingTop = pY / 2;
    let paddingBottom = pY / 2;

    const containerGetPadding = window.getComputedStyle(container[0]).paddingRight;
    const containerPadding = parseFloat(containerGetPadding);
    setMenuPosition(containerPadding, paddingTop, paddingLeft);

    ctx.strokeStyle = color;
    ctx.beginPath();

    for (let x = paddingLeft; x <= widthP - paddingRight; x += squareSize) {
      ctx.moveTo(x, paddingTop);
      ctx.lineTo(x, heightP - paddingBottom);
    }

    for (let y = paddingTop; y <= heightP - paddingBottom; y += squareSize) {
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(widthP - paddingRight, y);
    }

    ctx.stroke();
  }

  /**
   * get the height & the width of the canvas
   * and stock each in state
   * @return {void}
   */
  function setCanvas(): void {
    const grid = document.getElementById('grid-canvas');
    const gridHeight = grid.clientHeight;
    const gridWidth = grid.clientWidth;
    setHeightP(gridHeight);
    setWidthP(gridWidth);
  }

  /**
   * add listener resize in window
   * @return {void}
   */
  function setListener(): void {
    window.addEventListener('resize', setCanvas);
  }

  /**
   * remove listener resize in window
   * @return {void}
   */
  function removeListener(): void {
    window.removeEventListener('resize', setCanvas);
  }

  /**
   * animate the grid in enter
   * @param mouseEvent
   */
  function handleMouseEnter(mouseEvent) {
    const subpanel = mouseEvent.currentTarget.querySelector('.card-container');
    setTimeout(() => {
      subpanel.style.transition = "";
    }, 100);
    subpanel.style.transition = "transform 0.1s";
  }

  /**
   * animate the grid in leave
   * @param mouseEvent
   */
  function handleMouseLeave(mouseEvent) {
    const subpanel = mouseEvent.currentTarget.querySelector('.card-container');
    subpanel.style.transition = "transform 0.1s";
    setTimeout(() => {
      subpanel.style.transition = "";
    }, 100);
    subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
  }

  /**
   * generate the animation for the grid
   * @param mouseEvent
   */
  function transformPanel(mouseEvent) {
    const panel = mouseEvent.currentTarget;
    const subpanel = mouseEvent.currentTarget.querySelector('.card-container');
    const transformAmount = 5;
    const mouseX = mouseEvent.pageX;
    const mouseY = mouseEvent.pageY;
    const centerX = panel.offsetLeft + panel.clientWidth / 2;
    const centerY = panel.offsetTop + panel.clientHeight / 2;
    const percentX = (mouseX - centerX) / (panel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (panel.clientHeight / 2));
    subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
  }

  /**
   * set the resize listener
   */
  useEffect(() => {
    setCanvas();
  });

  /**
   * draw the grid
   */
  useEffect(() => {
    drawGrid(50, 10, '#f4eadf');
  }, [heightP, widthP])

  /**
   * set the listener for the grid animation function
   */
  useEffect(() => {
    const panels = document.getElementsByClassName('card-panel');
    Array.from(panels).forEach((panel: HTMLElement) => {
      panel.onmouseenter = handleMouseEnter;
      panel.onmouseleave = handleMouseLeave;
      panel.onmousemove = transformPanel;
    });
    setListener();
    return () => removeListener();
  }, [])

  return (
    <section className="header">

      <div className="card-panel">

        <div className="card-container" id="grid-canvas-div">

          <canvas
            id="grid-canvas"
            width={widthP}
            height={heightP}
          > </canvas>

          <div id="logo">{props.children}</div>

          <div id="menu">
            <Link href="/">
              <div className="hoverable">
                <p>{'<'}</p>
              </div>
            </Link>
          </div>

          <div id="shadow-menu" className="shadow" style={{
            height: '50px',
            width: '50px',
          }}> </div>

          {!props.isErrorPage &&
            <div className="bounce">
                <FontAwesomeIcon size="2x" icon={faHandPointDown}/>
            </div>
          }

        </div>

      </div>

    </section>
  )
}

export default Header;
