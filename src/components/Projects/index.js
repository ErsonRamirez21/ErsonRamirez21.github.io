import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

function importAll(r) {
  return r.keys().map(r);
}

const indieGameImages = importAll(
  require.context('../../assets/images/indieGame', false, /\.(png|jpe?g|svg|gif|mp4|webm)$/)
);

const seedPlanterImages = importAll(
  require.context('../../assets/images/seedplantermobile', false, /\.(png|jpe?g|svg)$/)
);

const mathmunitionImages = importAll(
  require.context('../../assets/images/mathmunition', false, /\.(png|jpe?g|svg)$/)
);

const nexusImages = importAll(
  require.context('../../assets/images/nexusgpa', false, /\.(png|jpe?g|svg)$/)
);

const nbodyImages = importAll(
  require.context('../../assets/images/nbodysim', false, /\.(png|jpe?g|svg)$/)
);

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const carouselRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const scrollCarousel = (index, direction) => {
    const carousel = carouselRefs.current[index];
    if (!carousel) return;
    const scrollAmount = carousel.offsetWidth * 0.7; 

    if (direction === 'left') {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: 'Deepwater Bravo',
      description:
        '2D action adventure rougelike created with GML. Inspired by classic titles like Hyperlight Drifter, Hades, and Enter the Gungeon! Still a work in progress.',
      images: indieGameImages,
    },
    {
      name: 'Seed Planter Mobile',
      description:
        'Cross-platform gardening app built with React Native. Track plants, journal progress, and maintain your garden.',
      images: seedPlanterImages,
    },
    {
      name: 'Mathmunition: Equation Siege',
      description:
        'Unity-based educational game teaching linear equations through arcade-style cannon mechanics.',
      gameEmbedUrl: 'https://jojojo8359.github.io/SWE-Project/assets/game_webgl/index.html',
      projectUrl: 'https://jojojo8359.github.io/SWE-Project/',
    },
    {
      name: 'Nexus GPA',
      description:
        'Android Studio app for calculating GPA using MVVM architecture, ViewModel, and LiveData.',
      images: nexusImages,
    },
    {
      name: 'C++ N-Body Simulation',
      description:
        'Physics-based simulation modeling gravitational interactions between celestial bodies.',
      images: nbodyImages,
    },
  ];

  return (
    <div className="container projects-page">
      <h1 className="fixed-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
      </h1>

      <div className="text-zone">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-description">
              <h2>{project.name}</h2>
              <p>{project.description}</p>

              {project.technologies && (
                <p className="technologies">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
              )}

              {project.projectUrl && (
                <a
                  className="external-link"
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Visit Project Site
                </a>
              )}
            </div>

            <div className="project-media">
              {project.gameEmbedUrl ? (
                <div className="game-embed">
                  <iframe
                    src={project.gameEmbedUrl}
                    title={`${project.name} Game`}
                    width="100%"
                    height="400"
                    scrolling="no"
                    allowFullScreen
                  />
                </div>
              ) : project.images?.length === 1 ? (
                <div
                  className="static-image"
                  onClick={() => handleImageClick(project.images[0].default || project.images[0])}
                >
                  <img
                    src={project.images[0].default || project.images[0]}
                    alt={`${project.name} screenshot`}
                  />
                </div>
              ) : project.images?.length > 1 ? (
                <div className="carousel-wrapper">
                  <button
                    className="carousel-arrow left-arrow"
                    onClick={() => scrollCarousel(index, 'left')}
                    aria-label="Scroll Left"
                  >
                    ‹
                  </button>

                  <div
                    className="scrolling-carousel"
                    ref={(el) => (carouselRefs.current[index] = el)}
                  >
                    {project.images.map((media, idx) => {
                      const src = media.default || media;
                      const isVideo = /\.(mp4|webm)$/i.test(src);

                      return (
                        <div
                          key={idx}
                          className="carousel-image"
                          onClick={() => handleImageClick(src)}
                        >
                          {isVideo ? (
                            <video
                              src={src}
                              muted
                              autoPlay
                              loop
                              preload="metadata"
                              style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                          ) : (
                            <img src={src} alt={`${project.name} screenshot ${idx + 1}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    className="carousel-arrow right-arrow"
                    onClick={() => scrollCarousel(index, 'right')}
                    aria-label="Scroll Right"
                  >
                    ›
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className={`image-modal ${isClosing ? 'closing' : ''}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            {/\.(mp4|webm)$/i.test(selectedImage) ? (
              <video src={selectedImage} controls autoPlay muted />
            ) : (
              <img src={selectedImage} alt="Enlarged" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
