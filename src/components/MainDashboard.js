// filepath: c:\Users\arnau\Documents\UNI\2n\Eng_software\lab6\reserves-biblioteca\src\components\MainDashboard.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLibrary } from "../context/LibraryContext";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";
import CancelReservation from "./CancelReservation";

function MainDashboard() {
  const { user, logout } = useLibrary();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6f8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ mt: 4, mb: 2, color: "#1976d2", fontWeight: "bold" }}
      >
        Biblioteca Universitària
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Benvingut, {user.email} ({user.role})
      </Typography>
      <Button sx={{ mb: 2 }} onClick={logout}>
        Tancar sessió
      </Button>
      <AddBookForm />
      <Typography variant="h5" sx={{ mt: 4 }}>
        Catàleg de llibres
      </Typography>
      <BookList />
      <Typography variant="h5" sx={{ mt: 4 }}>
        Les teves reserves
      </Typography>
      <CancelReservation />
    </Box>
  );
}

export default MainDashboard;