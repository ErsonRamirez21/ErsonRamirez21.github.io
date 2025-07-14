import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

function importAll(r) {
  return r.keys().map(r);
}

const seedPlanterImages = importAll(
  require.context('../../assets/images/seedplantermobile', false, /\.(png|jpe?g|svg)$/)
);

const mathmunitionImages = importAll(
  require.context('../../assets/images/mathmunition', false, /\.(png|jpe?g|svg)$/)
);

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const carouselsRef = useRef([]);
  const scrollXRef = useRef(0);

  // Animate carousel scroll
  useEffect(() => {
    let animationId;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!selectedImage) {
        scrollXRef.current += scrollSpeed;
        carouselsRef.current.forEach((carousel) => {
          if (carousel) {
            carousel.scrollLeft = scrollXRef.current;
          }
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [selectedImage]); // Pause when modal is open

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => setSelectedImage(null), 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      name: 'Seed Planter Mobile',
      description:
        'Cross-platform gardening app built with React Native. Track plants, journal progress, and maintain a virtual garden.',
      images: seedPlanterImages,
    },
    {
      name: 'Mathmunition: Equation Seige',
      description:
        'Unity-based educational game teaching linear equations through arcade-style cannon mechanics.',
      gameEmbedUrl: 'https://jojojo8359.github.io/SWE-Project/assets/game_webgl/index.html',
    },
  ];

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>

              {project.gameEmbedUrl && (
                <div className="game-embed">
                  <iframe
                    src={project.gameEmbedUrl}
                    title={`${project.name} Game`}
                    width="100%"
                    height="600"
                    scrolling="no"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {project.images?.length > 0 && (
                <div className="carousel-wrapper">
                  <div
                    className="scrolling-carousel"
                    ref={(el) => (carouselsRef.current[index] = el)}
                  >
                    {[...project.images, ...project.images].map((image, idx) => (
                      <div
                        key={idx}
                        className="carousel-image"
                        onClick={() => handleImageClick(image.default || image)}
                      >
                        <img
                          src={image.default || image}
                          alt={`${project.name} screenshot ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className={`image-modal ${isClosing ? 'closing' : ''}`}
          onClick={closeModal}
        >
          <div className="image-modal-content">
            <img src={selectedImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
