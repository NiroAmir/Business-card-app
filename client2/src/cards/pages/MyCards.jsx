import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function MyCards() {
  const {
    isLoading,
    error,
    handleGetMyCards,
    handleDeleteCard,
    filteredCards,
  } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user]);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    await handleGetMyCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <CardsFeedback
          is
          isLoading={isLoading}
          error={error}
          cards={filteredCards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
