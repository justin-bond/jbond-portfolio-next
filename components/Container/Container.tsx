import React from "react";
import classNames from "classnames";

const nsBase = "component";
const ns = `${nsBase}-container`;

const Container = ({ children, size }: { children: any; size?: string }) => {
  const rootClassnames = classNames({
    [`${ns}`]: true,
    [`${size}`]: size,
  });

  return <div className={rootClassnames}>{children}</div>;
};

export default Container;
