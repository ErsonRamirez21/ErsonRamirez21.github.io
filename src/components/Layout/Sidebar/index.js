import { Link, NavLink } from 'react-router-dom';
import LogoER from '../../../assets/images/logo-er.png';
import LogoSubtitleER from '../../../assets/images/logo_sub_er.png';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoER} alt="logo" />
            <img className="sub-logo" src={LogoSubtitleER} alt="ersonramirez" />
        </Link>
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
    </div>
)

export default Sidebar;