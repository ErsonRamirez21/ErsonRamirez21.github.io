import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
      <NavLink exact="true" activeClassName="active" to="/about">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink exact="true" activeClassName="active" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink>
      <NavLink exact="true" activeClassName="active" to="/projects">
        <FontAwesomeIcon icon={faSuitcase} />
      </NavLink>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ersonramirez/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/ErsonRamirez21">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </nav>
  </div>
);

export default Sidebar;
