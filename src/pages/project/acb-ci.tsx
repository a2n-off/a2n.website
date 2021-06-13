import React from 'react';
import AcbSvg from '../../component/svg/acb';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-medium-image-zoom';
import Header from '../../component/header';
import acbciHomePage from './../../assets/png/acbci-home-page.png';
import acbciElef from './../../assets/png/acbci-elef.png';
import acbciPic1 from '../../assets/png/acbci-pic-1.png';
import acbciPic2 from '../../assets/png/acbci-pic-2.png';
import acbciPic3 from '../../assets/png/acbci-pic-3.png';
import acbciSite from '../../assets/webm/acbci-site.webm';

const Acbci = () => {
  return (
    <section className="acbci">
      <Header isErrorPage={false}>
        <AcbSvg/>
      </Header>
      <section className="container">

        <hr/>
        <div className="project-title">
          <h1>NGO ACB-CI /</h1>
          <div>
            <p>Dev</p>
            <p>2020</p>
          </div>
        </div>
        <hr/>

        <Zoom>
          <img
            className="project-img"
            loading="lazy"
            src={acbciHomePage}
            alt="acb-ci homepage"
          />
        </Zoom>

        <h2>Context</h2>
        <hr/>

        <a href="https://acb-ci.org/" className="link hoverable" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size={'xs'} icon={faLink} /> Website
        </a>

        <p>The objective was to redesign the site because the old one caused several problems for the team, including two main ones:</p>

        <ul>
          <li>the design was old</li>
          <li>the team couldn't update it on their own</li>
        </ul>


        <p>
          As the NGO does not have extensible means, we are heading towards a low-cost solution,
          responding to the problem mentioned above and allowing to create a design quickly
          without causing additional blow.
        </p>
        <p>The chosen solution was WordPress with a custom free theme.</p>

        <h2>Execution</h2>
        <hr/>
        <p>
          After having developed the site, we offered different hosting solutions to the NGO and accompanied it on the deployment of the website.
          <br/>
          Training on the use of WordPress was also given.
        </p>

        <h2>Medias</h2>
        <hr/>

        <div className="img-grid">
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={acbciElef}
                 alt="acb-ci discover page"
            />
          </Zoom>
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={acbciPic1}
                 alt="acb-ci site page"
            />
          </Zoom>
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={acbciPic2}
                 alt="acb-ci site page"
            />
          </Zoom>
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={acbciPic3}
                 alt="acb-ci site page"
            />
          </Zoom>
        </div>

        <video controls className="project-img">
          <source
            src={acbciSite}
            type="video/webm"
          />
        </video>

        <footer> - that's all folks ! - </footer>
      </section>
    </section>
  )
}

export default Acbci;
