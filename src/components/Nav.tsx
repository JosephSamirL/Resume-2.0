import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { animateScroll } from "react-scroll"

const Nav = () => {
    const [isHomeInView, setIsHomeInView] = useState(false);

    useEffect(() => {
        
      const handleScroll = () => {
        
        const homeSection = document.getElementById('home');
        if (!homeSection) return;
        const rect = homeSection.getBoundingClientRect();
        const isInView = rect.top > -100 
      
        setIsHomeInView(isInView);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
      
    return (
        <nav style={{"background":isHomeInView?"transparent":""}} id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" onClick={() => animateScroll.scrollTo(0)} href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" onClick={() => animateScroll.scrollTo(document.querySelector("#home")?.clientHeight as number) } href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" onClick={() => animateScroll.scrollTo((document.querySelector("#home")?.clientHeight as number + (document.querySelector("#about")?.clientHeight as number)) as number) } href="#resume">
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
    )
}
export default Nav