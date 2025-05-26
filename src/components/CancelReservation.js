import React from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { useLibrary } from "../context/LibraryContext";

function CancelReservation() {
  const { books, getUserReservations, cancelReservation } = useLibrary();
  
  // Obtenir les reserves de l'usuari actual
  const userReservations = getUserReservations();
  
  // Funció per obtenir el títol d'un llibre a partir de l'id
  const getBookTitle = (bookId) => {
    const book = books.find(b => b.id === bookId);
    return book ? book.title : "Llibre desconegut";
  };
  
  // Funció per obtenir l'autor d'un llibre a partir de l'id
  const getBookAuthor = (bookId) => {
    const book = books.find(b => b.id === bookId);
    return book ? book.author : "Autor desconegut";
  };

  // Funció per cancel·lar una reserva
  const handleCancelReservation = (reservationId) => {
    cancelReservation(reservationId);
  };

  // Funció per formatar la data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ca-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mt: 2 }}>
      {userReservations.length === 0 ? (
        <Typography>No tens cap reserva activa.</Typography>
      ) : (
        <List>
          {userReservations.map((reservation) => (
            <ListItem
              key={reservation.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                mb: 1,
                p: 2,
              }}
            >
              <Typography variant="h6">{getBookTitle(reservation.bookId)}</Typography>
              <Typography variant="body2">Autor: {getBookAuthor(reservation.bookId)}</Typography>
              <Typography variant="body2">
                Data de reserva: {formatDate(reservation.date)}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => handleCancelReservation(reservation.id)}
                sx={{ mt: 1 }}
              >
                Cancel·lar Reserva
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default CancelReservation;