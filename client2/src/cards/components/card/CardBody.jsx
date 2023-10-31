import { CardContent, CardHeader, Divider, Typography } from "@mui/material";
import React from "react";
import { number, string } from "prop-types";
import addressType from "../../models/types/addressType";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  cardNumber,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone: </strong>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {address.city} {address.street} {address.houseNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong>
          {cardNumber}
        </Typography>
      </CardContent>
    </>
  );
}

CardBody.propType = {
  title: string.isRequired,
  subtitle: string.isRequired,
  phone: string.isRequired,
  address: addressType.isRequired,
  cardNumber: number.isRequired,
};
