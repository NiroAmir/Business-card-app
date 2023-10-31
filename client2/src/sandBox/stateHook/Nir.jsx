import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Nir() {
  const [data, setData] = useState("Nir");
  const changeData = (element) => {
    setData(element.target.value);
  };
  return (
    <div>
      <TextField value={data} onChange={changeData} />
      <Button onClick={() => {}}>Click!</Button>
    </div>
  );
}
