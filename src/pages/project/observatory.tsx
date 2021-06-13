import React from 'react';
import ObsSvg from '../../component/svg/obs';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-medium-image-zoom';
import Header from '../../component/header';
import obsCardOpen from '../../assets/png/obs-card-open.png';
import obsExpCardQuest from '../../assets/png/obs-exp-card-quest.png';
import obsHome from '../../assets/webm/obs-home.webm';
import obsFirstPartCard from '../../assets/webm/obs-first-part-card.webm';
import obsMap from '../../assets/webm/obs-map.webm';

const Observatory = () => {
  return (
    <section className="observatory">
      <Header isErrorPage={false}>
        <ObsSvg/>
      </Header>
      <section className="container">

        <hr/>
        <div className="project-title">
          <h1>Observatory /</h1>
          <div>
            <p>Dev & design</p>
            <p>2019</p>
          </div>
        </div>
        <hr/>

        <video controls autoPlay={true} className="project-img">
          <source src={obsHome} type="video/webm"/>
        </video>

        <h2>Context</h2>
        <hr/>
        <p>
          The objective of this collaboration
          (with <a className="link hoverable" href="https://www.lebusmagique.fr/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size={'xs'} icon={faLink} /> Le Bus Magique
        </a>)
          was to create a site allowing to visualize the progress of a
          player's character in the mmorpg game <a className="link hoverable" href="https://www.guildwars2.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon size={'xs'} icon={faLink} /> Guild Wars 2.
          </a>
        </p>

        <h2>Execution</h2>
        <hr/>
        <p>
          We had to be able to find several elements to allow the player to quickly find the information he needed.
        </p>
        <p>
          The following questions had to be answered:
        </p>

        <ul>
          <li>where am I in the story?</li>
          <li>I want to see a specific chapter how can I do?</li>
          <li>that we were my choices in the story?</li>
          <li>what are the quests that are blocked or open to me following my choices?</li>
        </ul>

        <p>
          The player's data being returned by the guild wars api we also had to do a data cleaning job directly in the site.
          <br/>
          The goal was to allow to correctly join the seasons, the chapters, the quests and the accomplishment (or not)
          of this one by the characters of the player.
        </p>

        <h2>Design</h2>
        <hr/>
        <p>For answers the previous questions we decided to split the app in half:</p>

        <ul>
          <li>
            a part where we find all the chapters of the story segmented by seasons and which allows you to choose
            which one you want to open
          </li>
          <li>
            a part where we find all the quests in the form of a route to visualize at a glance
            the choices made in the story
          </li>
        </ul>


        <h3>The first part (card)</h3>
        <p>
          The first part consists of several segments composed of map.
          <br/>
          Each segment represents a season and each map a chapter.
          <br/>
          By clicking on a card you access the quest linked to the chosen chapter.
        </p>

        <video controls className="project-img">
          <source src={obsFirstPartCard} type="video/webm"/>
        </video>

        <p>
          When choosing a card, it opens and offers a list of quests contained in the chapter.
          <br/>
          Each quest is linked together via a line which indicates the possible paths.
        </p>

        <Zoom>
          <img className="project-img"
               loading="lazy"
               src={obsCardOpen}
               alt="observatory card open"
          />
        </Zoom>

        <p>Each square in the map represents a quest with this information:</p>

        <Zoom>
          <img className="project-img"
               loading="lazy"
               src={obsExpCardQuest}
               alt="observatory card explication"
          />
        </Zoom>

        <h3>The second part (map)</h3>
        <p>
          The second part consists of a table showing all the characters of the player and showing him the path
          traveled via a map representing each quest by a square.
          <br/>
          Each column in the table represents a season or a chapter.
        </p>
        <p>
          Each quest (cube) is linked to the one that can precede it and to the one that can follow it.
          These paths are colored in different ways to allow the player to understand where they are.
        </p>

        <video controls className="project-img">
          <source src={obsMap} type="video/webm"/>
        </video>

        <footer> - that's all folks ! - </footer>

      </section>
    </section>
  )
}

export default Observatory;
