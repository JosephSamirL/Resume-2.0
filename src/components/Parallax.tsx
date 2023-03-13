import React, { useState, useEffect } from 'react';

interface Props {
    backgroundImage: string;
    overlayOpacity: number;
    content: JSX.Element;

}
function Parallax(props: Props) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { backgroundImage, overlayOpacity, content } = props;

  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${offsetY * 0.7}px`
      }}
    >
      <div
        className="overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Parallax;
