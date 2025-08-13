import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-er-export.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef(); 
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    });

    if (outlineLogoRef.current) {

      const paths = outlineLogoRef.current.querySelectorAll('path');
      gsap.fromTo(
        paths,
        { drawSVG: "0%" }, 
        { drawSVG: "100%", duration: 5, stagger: 0.2 } 
      );
    }

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />

      <svg
        ref={outlineLogoRef} 
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        viewBox="0 0 150 150"
        height="200"
        version="1.0"
      >
        <path
          stroke-linecap="butt"
          transform="matrix(0.75, 0, 0, 0.75, 2.24297, 4.281152)"
          fill="none"
          stroke-linejoin="miter"
          d="M 76.025003 20.104298 L 76.025003 43.692841 L 35.446876 43.692841 L 35.446876 67.104301 L 74.31667 67.104301 L 74.31667 90.687636 L 35.446876 90.687636 L 35.446876 114.416804 L 76.025003 114.416804 L 76.025003 138.000138 L 8.582291 138.000138 L 8.582291 20.104298 Z M 91.467712 20.104298 L 133.613548 20.104298 C 144.967715 20.104298 154.212508 23.13034 161.353133 29.177215 C 168.493758 35.224091 172.066675 43.864716 172.066675 55.099092 C 172.066675 63.776176 169.889592 71.04701 165.540633 76.906385 C 161.212508 82.770969 155.342716 86.885552 147.92084 89.260552 L 188.498968 138.000138 L 154.342716 138.000138 L 118.332297 91.422011 L 118.332297 138.000138 L 91.467712 138.000138 Z M 118.332297 72.406385 L 121.472922 72.406385 C 123.941672 72.406385 126.035423 72.35951 127.754173 72.26576 C 129.478131 72.17201 131.431256 71.849093 133.613548 71.291801 C 135.801048 70.708468 137.556257 69.895968 138.884382 68.849093 C 140.23334 67.776176 141.384382 66.244926 142.337507 64.239717 C 143.290632 62.239717 143.769799 59.823051 143.769799 56.984509 C 143.769799 54.125134 143.290632 51.692842 142.337507 49.692842 C 141.384382 47.692841 140.23334 46.1668 138.884382 45.119925 C 137.556257 44.078258 135.801048 43.26055 133.613548 42.682425 C 131.431256 42.099091 129.478131 41.760549 127.754173 41.666799 C 126.035423 41.573049 123.941672 41.526174 121.472922 41.526174 L 118.332297 41.526174 Z M 118.332297 72.406385"
          stroke="#f6eddb"
          stroke-width="1.697151"
          stroke-opacity="1"
          stroke-miterlimit="4"
        />
      </svg>
    </div>
  );
};

export default Logo;