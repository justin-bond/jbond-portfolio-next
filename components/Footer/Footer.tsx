import React from "react";
import classNames from "classnames";

import Container from "../Container";

const nsBase = "component";
const ns = `${nsBase}-footer`;

const Footer = () => {
  const rootClassnames = classNames({
    [`${ns}`]: true,
  });
  const date = new Date().getFullYear();

  return (
    <footer className={rootClassnames}>
      <Container>{`Justin Bond© ${date}`}</Container>
    </footer>
  );
};

export default Footer;
