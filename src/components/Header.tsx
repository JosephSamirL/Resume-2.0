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
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ['#ffffff', '#ff0000', '#00ff00', '#0000ff'],
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },

      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    
    },
  },
  retina_detect: true,
};

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
