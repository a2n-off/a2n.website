import React from 'react';
import StremhoSvg from '../../component/svg/stremho';
import Zoom from 'react-medium-image-zoom';
import Header from '../../component/header';
import stremhoWorkGreen from '../../assets/png/stremho_work_green.png';
import stremhoLogoLine from '../../assets/png/stremho_logo_line.png';
import stremhoLogoExp from '../../assets/png/stremho_logo_exp.png';
import stremhoLogoFullLine from '../../assets/png/stremho_logo_full_line.png';
import stremhoMockCard from '../../assets/png/stremho_mock_card.png';
import stremhoMockFlag from '../../assets/png/stremho_mock_flag.png';
import stremhoMockStreet from '../../assets/png/stremho_mock_street.png';
import stremhoMockStamp from '../../assets/png/stremho_mock_stamp.png';

const Stremho = () => {
  return (
    <section className="stremho">
      <Header isErrorPage={false}>
        <StremhoSvg/>
      </Header>
      <section className="container">

        <hr/>
        <div className="project-title">
          <h1>STREMHO /</h1>
          <div>
            <p>Logo proposal</p>
            <p>2020</p>
          </div>
        </div>
        <hr/>

        <Zoom>
          <img className="project-img"
               loading="lazy"
               src={stremhoWorkGreen}
               alt="stremho logo"
          />
        </Zoom>

        <h2>Meaning</h2>
        <hr/>
        <p>STREMHO stands for Stress, Epigenetic Memory in Horticultural Plants</p>
        <h2>Context</h2>
        <hr/>
        <p>This is a logo proposal made to the team.</p>
        <p>STREMHO is a team that works within INRAE in Angers (France). </p>
        <p>
          The goal of the team is to understand the epigenetic memory on plants, under stress conditions,
          in different environments.
        </p>
        <p>
          The team needed a logo to represent them on different media (website, document, ...) or at events
          and they had in mind 3 representation vectors for their project:
        </p>

        <ul>
          <li>a representation of DNA</li>
          <li>a representation of the city</li>
          <li>something reminiscent of plants</li>
        </ul>

        <div className="little-img">
          <Zoom>
            <img loading="lazy" src={stremhoLogoLine} alt="stremho logo"/>
          </Zoom>
        </div>
        <h2>Execution</h2>
        <hr/>
        <p>
          Because of the length of the meaning of the name, the logo had to be usable with his meaning,
          alone or just with the name, which would allow adaptation on all the supports you want.
        </p>

        <Zoom>
          <img className="project-img" loading="lazy" src={stremhoLogoExp} alt="stremho logo explication"/>
        </Zoom>
        <Zoom>
          <img className="project-img" loading="lazy" src={stremhoLogoFullLine} alt="stremho logo"/>
        </Zoom>

        <h2>Mockup</h2>
        <hr/>
        <div className="img-grid">
          <Zoom>
            <img className="project-img" loading="lazy" src={stremhoMockCard} alt="stremho card logo"/>
          </Zoom>
          <Zoom>
            <img className="project-img" loading="lazy" src={stremhoMockFlag} alt="stremho flag logo"/>
          </Zoom>
          <Zoom>
            <img className="project-img" loading="lazy" src={stremhoMockStreet} alt="stremho street logo"/>
          </Zoom>
          <Zoom>
            <img className="project-img" loading="lazy" src={stremhoMockStamp} alt="stremho stamp logo"/>
          </Zoom>
        </div>

        <footer> - that's all folks ! - </footer>
      </section>
    </section>
  )
}

export default Stremho;
