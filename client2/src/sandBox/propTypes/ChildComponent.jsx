import React from "react";
import { node } from "prop-types";

export default function ChildComponent({ data, children }) {
  return (
    <div>
      {data} {children}
    </div>
  );
}

ChildComponent.propType = {
  data: node,
  children: node,
};
