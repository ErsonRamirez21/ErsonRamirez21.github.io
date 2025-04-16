import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'E', 'r', 's', 'o', 'n'];
    const jobArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', '.'];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeout);
    }
    , []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} _11`}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} // Start index for nameArray
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={nameArray.length + 15} // Ensure jobArray starts after nameArray
                    />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
};

export default Home;