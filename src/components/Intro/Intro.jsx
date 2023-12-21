import "./Intro.scss";
import ProfilePhoto from "../../assets/images/profile-picture-square.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const paragraphStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

function Intro() {
  const titleTyped = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const options = {
      strings: ["Hi there!", "Hola!", "Howdy!", "Hello!"],
      typeSpeed: 150,
      backSpeed: 70,
      backDelay: 1000,
      loop: false,
      showCursor: true,
      cursorChar: "&nbsp;",
    };

    const typed = new Typed(titleTyped.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Fade triggerOnce cascade>
      <section id="intro" className="intro">
        <div className="intro__info">
          <Fade triggerOnce cascade damping={0.1}>
            <h1 className="intro__info--title">
              <span ref={titleTyped}></span>
            </h1>

            <p
              className="intro__info--text"
              
            >
              I'm <mark>Felipe, a Front-end Developer</mark> with a passion for
              Javascript, ReactJS adn web technologies. Enthusiastic,
              hardworking and innovative, driven by a desire to learn and
              explore new ideas. Currently based in the vibrant city of
              Vancouver where I'm available for full-time or freelance work
              opportunities, as well as working remotely for clients worldwide.
              <br />
			  </p>
			  <p className="intro__info--text" style={isOpen ? null : paragraphStyles}>
              <br />
			  I take a personal and creative approach to solving my
              clients' problems - whether that's developing a web app, landing
              page or managing a creative project from start to finish. My
              strength lies in almost ten years of experience working across the
              entire digital design and development process, as well as my
              self-motivated and collaborative nature.
            </p>
            
              <button className="read-more-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "less.." : "more..."}
              </button>
            
          </Fade>
        </div>
        <Slide left triggerOnce>
          <div className="intro__placeholder">
            <div className="intro__placeholder--img">
              <img src={ProfilePhoto} alt="this-is-myself" />
            </div>
          </div>
        </Slide>
      </section>
    </Fade>
  );
}

export default Intro;
