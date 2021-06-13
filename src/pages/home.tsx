import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import AiSvg from '../component/svg/ai';
import StremhoSvg from '../component/svg/stremho';
import AcbSvg from '../component/svg/acb';
import ObsSvg from '../component/svg/obs';
import { Link } from 'react-router-dom';

const Home = () => {
  const [widthP, setWidthP] = useState(0);
  const [heightP, setHeightP] = useState(0);
  const [desc, setDesc] = useState('Projects');
  const [logo, setLogo] = useState(<AiSvg/>);

  /**
   * set the git icon position and the git icon shadow position
   * @param {number} paddingContainer
   * @param {number} paddingBottom
   * @param {number} paddingRight
   */
  function setGitPosition(paddingContainer: any, paddingBottom: number, paddingRight: number) {
    const git = document.getElementById('github');
    const shadowGit = document.getElementById('shadow-git');
    if (git && shadowGit) {
      git.style.bottom = `${paddingContainer+paddingBottom}px`;
      git.style.right = `${paddingContainer+paddingRight}px`;
      shadowGit.style.bottom = `${paddingContainer+paddingBottom}px`;
      shadowGit.style.right = `${paddingContainer+paddingRight}px`;
    }
  }

  /**
   * set the behance icon position and the behance icon shadow position
   * @param {number} paddingContainer
   * @param {number} paddingBottom
   * @param {number} paddingRight
   */
  function setBehancePosition(paddingContainer: number, paddingBottom: number, paddingRight: number) {
    const behance = document.getElementById('behance');
    const shadowBehance = document.getElementById('shadow-behance');
    if (behance && shadowBehance) {
      behance.style.bottom = `${paddingContainer+paddingBottom}px`;
      behance.style.right = `${paddingContainer+paddingRight+50}px`;
      shadowBehance.style.bottom = `${paddingContainer+paddingBottom}px`;
      shadowBehance.style.right = `${paddingContainer+paddingRight+50}px`;
    }
  }

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
    if (menu && shadowMenu) {
      menu.style.top = `${paddingContainer+paddingTop}px`;
      menu.style.left = `${paddingContainer+paddingLeft}px`;
      shadowMenu.style.top = `${paddingContainer+paddingTop}px`;
      shadowMenu.style.left = `${paddingContainer+paddingLeft}px`;
    }
  }

  /**
   * set the desc position and the desc shadow position
   * @param {number} paddingContainer
   * @param {number} paddingTop
   * @param {number} paddingLeft
   * @param {number} squareSize
   */
  function setDescPosition(paddingContainer: number, paddingTop: number, paddingLeft: number, squareSize: number) {
    const desc = document.getElementById('desc');
    const shadowDesc = document.getElementById('shadow-desc');
    if (desc && shadowDesc) {
      desc.style.top = `${paddingContainer+paddingTop}px`;
      desc.style.left = `${paddingContainer+paddingLeft+squareSize}px`;
      shadowDesc.style.top = `${paddingContainer+paddingTop}px`;
      shadowDesc.style.left = `${paddingContainer+paddingLeft+squareSize}px`;
    }
  }

  /**
   * set the contact position and the contact shadow position
   * @param {number} containerPadding
   * @param {number} y
   * @param {number} paddingLeft
   * @param {number} squareSize
   */
  function setContactPosition(containerPadding: number, y: number, paddingLeft: number, squareSize: number) {
    const contact = document.getElementById('contact');
    const shadowContact = document.getElementById('shadow-contact');
    const modifier = 50 - containerPadding;
    if (contact && shadowContact) {
      contact.style.top = `${y-modifier}px`;
      contact.style.left = `${paddingLeft+squareSize-modifier}px`;
      shadowContact.style.top = `${y-modifier}px`;
      shadowContact.style.left = `${paddingLeft+squareSize-modifier}px`;
    }
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
    const d = 2;
    let paddingLeft = pX / d;
    let paddingRight = pX / d;
    let paddingTop = pY / d;
    let paddingBottom = pY / d;

    // .padding doesn't exist so i take the padding right because, normally, the padding is
    // 50 50 50 50 or 0 0 0 0
    const containerGetPadding = window.getComputedStyle(container[0]).paddingRight;
    const containerPadding = parseFloat(containerGetPadding);

    setMenuPosition(containerPadding, paddingTop, paddingLeft);
    setDescPosition(containerPadding, paddingTop, paddingLeft, squareSize);
    setGitPosition(containerPadding, paddingBottom, paddingRight);
    setBehancePosition(containerPadding, paddingBottom, paddingRight);

    if (ctx) {
      ctx.strokeStyle = color;
      ctx.beginPath();

      for (let x = paddingLeft; x <= widthP - paddingRight; x += squareSize) {
        ctx.moveTo(x, paddingTop);
        ctx.lineTo(x, heightP - paddingBottom);
      }

      for (let y = paddingTop; y <= heightP - paddingBottom; y += squareSize) {
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(widthP - paddingRight, y);

        if (y <= heightP - paddingBottom) { // set the contact position
          setContactPosition(containerPadding, y, paddingLeft, squareSize);
        }
      }

      ctx.stroke();
    }
  }

  /**
   * get the height & the width of the canvas
   * and stock each in state
   * @return {void}
   */
  function setCanvas(): void {
    const grid = document.getElementById('grid-canvas');
    if (grid) {
      const gridHeight = grid.clientHeight;
      const gridWidth = grid.clientWidth;
      setHeightP(gridHeight);
      setWidthP(gridWidth);
    }
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
  function handleMouseEnter(mouseEvent: MouseEvent) {
    const subpanel = (mouseEvent.currentTarget as Element)?.querySelector('.card-container');
    setTimeout(() => {
      (subpanel as HTMLElement).style.transition = "";
    }, 100);
    (subpanel as HTMLElement).style.transition = "transform 0.1s";
  }

  /**
   * animate the grid in leave
   * @param mouseEvent
   */
  function handleMouseLeave(mouseEvent: MouseEvent) {
    const subpanel = (mouseEvent.currentTarget as Element)?.querySelector('.card-container');
    (subpanel as HTMLElement).style.transition = "transform 0.1s";
    setTimeout(() => {
      (subpanel as HTMLElement).style.transition = "";
    }, 100);
    (subpanel as HTMLElement).style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
  }

  /**
   * generate the animation for the grid
   * @param mouseEvent
   */
  function transformPanel(mouseEvent: MouseEvent) {
    const panel = mouseEvent.currentTarget;
    const subpanel = (mouseEvent.currentTarget as Element)?.querySelector('.card-container');
    const transformAmount = 5;
    const mouseX = mouseEvent.pageX;
    const mouseY = mouseEvent.pageY;
    if (panel) {
      const centerX = (panel as HTMLElement).offsetLeft + (panel as HTMLElement).clientWidth / 2;
      const centerY = (panel as HTMLElement).offsetTop + (panel as HTMLElement).clientHeight / 2;
      const percentX = (mouseX - centerX) / ((panel as HTMLElement).clientWidth / 2);
      const percentY = -((mouseY - centerY) / ((panel as HTMLElement).clientHeight / 2));
      (subpanel as HTMLElement).style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
    }
  }

  /**
   * set the description for each project
   * @param event
   */
  function setDescription(event: React.MouseEvent<HTMLDivElement>) {
    const title = (event.currentTarget as HTMLElement)?.dataset.title;
    setDesc(title || '');
    switch (title) {
      case 'STREMHO':
        setLogo(<StremhoSvg/>);
        break;
      case 'Anvil Interactive':
        setLogo(<AiSvg/>);
        break;
      case 'ACB CI':
        setLogo(<AcbSvg/>);
        break;
      case 'Observatory':
        setLogo(<ObsSvg/>);
        break;
      default:
        setLogo(<AiSvg/>);
    }
  }

  /**
   * remove the description for each project
   */
  function removeDescription() {
    setDesc('Projects');
    setLogo(<AiSvg/>);
  }

  /**
   * copy the email
   */
  function copyMail() {
    const tooltip = document.getElementById("contactTooltip");
    const text = 'contact@anvil-interactive.dev';
    if (tooltip) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Async: Copying to clipboard was successful!');
        tooltip.innerHTML = "Copied: " + text;
      }, (err) => {
        console.error('Async: Could not copy text: ', err);
        tooltip.innerHTML = "Hum :/ error : " + err;
      });
    }
  }

  /**
   * handle the tooltip for the contact button
   */
  function handleTooltip() {
    const tooltip = document.getElementById("contactTooltip");
    if (tooltip) tooltip.innerHTML = "Copy email";
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
    Array.from(panels).forEach((panel: Element) => {
      (panel as HTMLElement).onmouseenter = handleMouseEnter;
      (panel as HTMLElement).onmouseleave = handleMouseLeave;
      (panel as HTMLElement).onmousemove = transformPanel;
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

            <div id="logo" className="mobile">{logo}</div>

            <div id="menu">
              <Link to="/project/stremho">
                <div
                  className="hoverable"
                  onMouseEnter={(event) => setDescription(event)}
                  onMouseLeave={() => removeDescription()}
                  data-title='STREMHO'
                >
                  <p>s</p>
                </div>
              </Link>

              <Link to="/project/anvil-interactive">
                <div
                  className="hoverable"
                  onMouseEnter={(event) => setDescription(event)}
                  onMouseLeave={() => removeDescription()}
                  data-title='Anvil Interactive'
                >
                  <p>a</p>
                </div>
              </Link>

              <Link to="/project/acb-ci">
                <div
                  className="hoverable"
                  onMouseEnter={(event) => setDescription(event)}
                  onMouseLeave={() => removeDescription()}
                  data-title='ACB CI'
                >
                  <p>a</p>
                </div>
              </Link>

              <Link to="/project/observatory">
                <div
                  className="hoverable"
                  onMouseEnter={(event) => setDescription(event)}
                  onMouseLeave={() => removeDescription()}
                  data-title='Observatory'
                >
                  <p>o</p>
                </div>
              </Link>

            </div>
            <div id="shadow-menu" className="shadow" style={{
              height: '200px',
              width: '50px',
            }}> </div>

            <div id="desc" className="on-grid">
              <h3>{desc}</h3>
            </div>
            <div id="shadow-desc" className="shadow" style={{
              height: '50px',
              width: '100px',
            }}> </div>


            <div id="contact" className="tooltip on-grid hoverable" onClick={() => copyMail()} onMouseOut={() => handleTooltip()}>
              <span className="tooltiptext" id="contactTooltip">Copy email</span>
              <h3>Mail us</h3>
            </div>

            <div id="shadow-contact" className="shadow" style={{
              height: '50px',
              width: '100px',
            }}> </div>

            <a id="github" className="on-grid" href="https://github.com/bouteillerAlan" target="_blank" rel="noopener noreferrer">
              <div className="hoverable">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
            <div id="shadow-git" className="shadow" style={{
              height: '50px',
              width: '50px',
            }}> </div>

            <a id="behance" className="on-grid" href="https://www.behance.net/alanbouteiller" target="_blank" rel="noopener noreferrer">
              <div className="hoverable">
                <FontAwesomeIcon icon={faBehance} />
              </div>
            </a>
            <div id="shadow-behance" className="shadow" style={{
              height: '50px',
              width: '50px',
            }}> </div>

          </div>

        </div>

      </section>
  )
}

export default Home;