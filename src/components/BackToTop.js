import React, { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

const BackToTop = (props) => {
  const location = useLocation();
  const topX = 0;
  const topY = 0;

  useEffect(() => {
    window.scrollTo(topX, topY);
  }, [location]);

  return <Fragment>{props.children}</Fragment>;
};

export default BackToTop;
