import { Link, NavLink } from 'react-router-dom';
import LogoER from '../../assets/images/logo-er.png';
import LogoSubtitleER from '../../assets/images/logo_sub_er.png';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">

        {/*<Link className="logo" to="/">
            <img src={LogoER} alt="logo" />
            <img className="sub-logo" src={LogoSubtitleER} alt="ersonramirez" />
        </Link>*/}

        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
            </NavLink> 
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ersonramirez/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ErsonRamirez21"
                >
                    <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
                </a>
            </li>
        </ul>




    </div>
)

export default Sidebar;