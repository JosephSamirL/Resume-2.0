import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styles from '@/styles/particles.module.css'

interface Props {
    data: {
        project: string;
        github: string;
        name: string;
        description: string;
        links: [{name: string, url: string}]
    }
}
const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "top",
        enable: true,
        outMode: "out",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.9,
      },
      shape: {
        type: "edge",
      },
      size: {
        random: true,
        value: 3,
      },
    },
  detectRetina: true,
}
function Header(props: Props) {
    // @ts-ignore
    const particlesInit = async (main: Engine) => {

    await loadFull(main);
};
    const name = props.data.name;
    const description = props.data.description;
    const links = props.data.links;
    
  return (
<>
 <Particles className={styles.particles as string} init={particlesInit} options={particlesOptions as any} />
 <header id="home">
       

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
<Fade bottom>
        <div className="row banner">
          <div className="banner-text">
       
              <h1 className="responsive-headline">{name}</h1>
            
           
              <h3>{description}.</h3>
            
            <hr />
             
              <ul className="social">
                {links?.map((link , index) => {
                    return(
                <a key={link.name} href={link.url} className={`button btn project-btn ${index%2 === 0 ? "github-btn":""}`}>
                        {link.name}
                </a>
                    )
                })}
        
              </ul>
            
           
          </div>
        </div>
</Fade>
        <p className="scrolldown">
          <a className="smoothscroll" href="#resume">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
</>
  )
}

export default Header
