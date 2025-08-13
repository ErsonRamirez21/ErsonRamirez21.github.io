import { useEffect, useState } from 'react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>

          <p>
            Graduated from the University of Massachusetts with a Bachelor's of Science in Computer Science with a mathematics minor.
            Strong foundation in software development, with hands-on
            experience in various programming languages like C, C++, XML, JavaScript, and at the moment GML. 
            I am particularly passionate about front-end design,
            crafting intuitive and engaging user interfaces that enhance user experience.
          </p>

          <p style={{ textAlign: 'left' }}>
            I am confident in my ability to iterate on previous projects to
            elevate new ones to the next level. I have a keen eye for detail
            and a strong understanding of design principles, which allows me
            to create visually appealing and user-friendly applications.
          </p>

          <p>
            As for hobbies, I make music in just about every style. Alternative,
            Rock, Indie Pop, and even video game soundtracks. I also love
            playing a wide variety of games like Roguelikes, RPGs, Open World,
            Soulslikes, and everything in between. Currently working on an indie 
            game similar to games like Hyper Light Drifter, Hades, and Enter the Gungeon.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" aria-hidden="true" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" aria-hidden="true" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" aria-hidden="true" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" aria-hidden="true" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" aria-hidden="true" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default About;
