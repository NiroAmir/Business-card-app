import { CardMedia } from "@mui/material";
import React from "react";

import imageType from "../../models/types/imageType";

export default function CardHead({ image }) {
  return (
    <CardMedia component="img" height="140" image={image.url} alt={image.alt} />
  );
}

CardHead.propType = {
  image: imageType.isRequired,
};
