import { Grid, Typography } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";
import useCards from "../hooks/useCards";

export default function Cards({ cards, handleDelete }) {
  const handleEdit = (id) => {};
  const handleLike = (id) => {};
  const { handleLikeCard } = useCards();
  if (cards.length == 0) {
    return (
      <Typography m={2}>
        "Oops... it seems there are no bussines cards to display"
      </Typography>
    );
  }

  return (
    <>
      <Grid container>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLike={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
       
    </>
  );
}
Cards.propTypes = {
  cards: arrayOf(cardType),
};
