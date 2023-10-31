import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Testing() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  const changingData = (e) => {
    setData((previousValues) => {
      return { ...previousValues, [e.target.name]: e.target.value };
    });
    console.log(data);
  };

  return (
    <div>
      <TextField name="firstName" label="First Name" onChange={changingData} />
      <TextField name="lastName" label="Last Name" onChange={changingData} />
      <TextField name="address" label="Address" onChange={changingData} />
    </div>
  );
}
