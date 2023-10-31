import { Button } from "@mui/material";
import React from "react";

export default function MyButton({ handleClick, children }) {
  return <Button onClick={handleClick}>{children}</Button>;
}
