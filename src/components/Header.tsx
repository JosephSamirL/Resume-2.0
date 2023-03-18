import React, { CSSProperties } from 'react'

// @ts-ignore
import Fade from 'react-reveal/Fade';


interface Props {
    data: {
        project: string;
        github: string;
        name: string;
        description: string;
        links: [{name: string, url: string}]
    }
}


function Header(props: Props) {

    const name = props.data.name;
    const description = props.data.description;
    const links = props.data.links;
    
  return (
<>

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
       
              <h1 className="responsive-headline">{name.split("").map((item:string , index:number)=>{return (<div style={{"--i":(index+1)} as CSSProperties} key={index}>{item}</div>)})}</h1>
            
           
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
