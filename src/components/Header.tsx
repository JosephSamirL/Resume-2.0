import React, { CSSProperties, useEffect } from 'react'

// @ts-ignore
import Fade from 'react-reveal/Fade';
import { animateScroll, scrollSpy } from 'react-scroll';

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
    useEffect(() => {
      scrollSpy.update();
    }, [])
    
  return (
<>

 <header id="home">
       


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
          <a className="smoothscroll" onClick={() => animateScroll.scrollTo(document.querySelector("#home")?.clientHeight as number)}>
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
</>
  )
}

export default Header
