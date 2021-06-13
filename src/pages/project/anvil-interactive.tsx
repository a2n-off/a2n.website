import React from 'react';
import AiSvg from '../../component/svg/ai';
import Zoom from 'react-medium-image-zoom';
import Header from '../../component/header';
import aiLogoNamed from '../../assets/png/ai_logo_named.png';
import aiFont from '../../assets/png/ai_font.png';
import aiColor from '../../assets/png/ai_color.png';
import aiColorContext from '../../assets/png/ai_color_context.png';
import aiMarge from '../../assets/png/ai-marge.png';
import aiMockMug from '../../assets/png/ai_mock_mug.png';
import aiMockCard from '../../assets/png/ai_mock_card.png';
import aiMockFacade from '../../assets/png/ai_mock_facade.png';
import aiMockFacadeWhite from '../../assets/png/ai_mock_facade_white.png';

const Ai = () => {
  return (
    <section className="ai">
      <Header isErrorPage={false}>
        <AiSvg/>
      </Header>
      <section className="container">

        <hr/>
        <div className="project-title">
          <h1>Anvil Interactive /</h1>
          <div>
            <p>Logo</p>
            <p>2020</p>
          </div>
        </div>
        <hr/>

        <Zoom>
          <img className="project-img white-bk"
               loading="lazy"
               src={aiLogoNamed}
               alt="anvil interactive logo with the name"
          />
        </Zoom>

        <h2>Context</h2>
        <hr/>
        <p>I created this logo for my web development company.</p>
        <p>For me the creation of product linked to the web must remain in agreement with certain points, which are a kind of "mantra":</p>

        <ul>
          <li>web or application development is a form of craftsmanship and the people who practice it must comply with "rules of the art" (Anvil)</li>
          <li>web or application development as such must not prevent the creation of a "finished and beautiful" product (Interactive)</li>
        </ul>

        <p>My vocation through this company is to build functional and artistic products, both visually (ui) and functionally (ux).</p>

        <h2>Definition</h2>
        <hr/>
        <p>The logo is made up of two lines which take the form of a certain element found in the web and in the code, for example :</p>

        <ul>
          <li>in the url "https://google.com"</li>
          <li>in the tags in the code {`<p></p>`}</li>
        </ul>

        <p>It's a mix between :// and {`<>`}</p>

        <h2>Font</h2>
        <hr/>
        <Zoom>
          <img className="project-img white-bk"
               loading="lazy"
               src={aiFont}
               alt="ai font"
          />
        </Zoom>
        <h2>Color</h2>
        <hr/>

        <Zoom>
          <img className="project-img white-bk"
               loading="lazy"
               src={aiColor}
               alt="ai color"
          />
        </Zoom>
        <Zoom>
          <img className="project-img white-bk-full"
               loading="lazy"
               src={aiColorContext}
               alt="ai color by context"
          />
        </Zoom>

        <h2>Location and margin</h2>
        <hr/>
        <Zoom>
          <img className="project-img white-bk"
               src={aiMarge}
               alt="ai color"
          />
        </Zoom>
        <h2>Mockup</h2>
        <hr/>
        <div className="img-grid">
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={aiMockMug}
                 alt="ai mock mug logo"
            />
          </Zoom>
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={aiMockCard}
                 alt="ai mock card logo"
            />
          </Zoom>
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={aiMockFacade}
                 alt="ai mock street logo"
            />
          </Zoom>
          <Zoom>
            <img className="project-img"
                 loading="lazy"
                 src={aiMockFacadeWhite}
                 alt="ai mock street logo"
            />
          </Zoom>
        </div>

        <footer> - that's all folks ! - </footer>
      </section>
    </section>
  )
}

export default Ai;
