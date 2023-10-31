import React from "react";

export default function ObjectPropChild({ userName, password }) {
  return (
    <>
      <div>{userName}</div>
      <div>{password}</div>
    </>
  );
}
