import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MyDetails() {
  const [person, setPerson] = useState({
    FullName: { firstName: "Tzach", lastName: "Dabush" },
    email: "example@gmail.com",
  });

  return (
    <>
      <Typography>{person.FullName.firstName}</Typography>
      <Typography>{person.FullName.lastName}</Typography>

      <TextField
        label="First Name"
        variant="outlined"
        onChange={(e) => {
          setPerson({
            ...person,
            FullName: { ...person.FullName, firstName: e.target.value },
          });
        }}
      />
      <TextField
        label="last Name"
        variant="outlined"
        onChange={(e) => {
          setPerson({
            ...person,
            FullName: { ...person.FullName, lastName: e.target.value },
          });
        }}
      />
    </>
  );
}
