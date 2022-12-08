import React, { PropsWithChildren } from "react";

const Scroll = (props: PropsWithChildren) => {
  return (
    <div style={{ overflowY: "scroll", height: "750px" }}>{props.children}</div>
  );
};

export default Scroll;
