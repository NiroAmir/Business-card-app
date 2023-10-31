import React from "react";
import StringPropChild from "./StringPropChild";

export default function StringPropParent() {
  let string = "text from the father";
  return <StringPropChild data={string} />;
}
