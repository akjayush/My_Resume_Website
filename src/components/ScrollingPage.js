import React from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";

const ScrollingPage = ({ target }) => {
  const scrollToComponent = () => {
    scroller.scrollTo(target, {
      duration: 800,
      smooth: "easeInOut",
    });
  };

  return (
    <div className="scrolling-page">
      <Element name={target}>
        <h1>{target}</h1>
        <p>Your content for {target} component goes here.</p>
        <Link to="/" onClick={scrollToComponent}>
          Go back to Home
        </Link>
      </Element>
    </div>
  );
};

export default ScrollingPage;
