import React, { useState } from "react";
import { Box, List, ListItem, Typography, Button, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from "@mui/material";
import { useLibrary } from "../context/LibraryContext";

function BookList() {
  const { books, user, reserveBook, removeBook } = useLibrary();
  const [openDialog, setOpenDialog] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleReserve = (bookId) => {
    reserveBook(bookId);
  };

  const handleDeleteClick = (book) => {
    setBookToDelete(book);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    if (bookToDelete) {
      removeBook(bookToDelete.id);
      setShowDeleteConfirmation(true);
    }
    setOpenDialog(false);
    setBookToDelete(null);
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
    setBookToDelete(null);
  };

  const isLibrarian = user && (user.role === "bibliotecari" || user.role === "admin");

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mt: 2 }}>
      {books.length === 0 ? (
        <Typography>No hi ha llibres disponibles.</Typography>
      ) : (
        <List>
          {books.map((book) => (
            <ListItem
              key={book.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                mb: 1,
                p: 2,
              }}
            >
              <Box>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2">Autor: {book.author}</Typography>
                <Typography variant="body2">ISBN: {book.isbn}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: book.available ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {book.available ? "Disponible" : "No disponible"}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {user && book.available && (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleReserve(book.id)}
                  >
                    Reservar
                  </Button>
                )}
                {isLibrarian && (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDeleteClick(book)}
                  >
                    Eliminar
                  </Button>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCancelDelete}
      >
        <DialogTitle>Confirmar eliminació</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estàs segur que vols eliminar el llibre "{bookToDelete?.title}"? 
            Aquesta acció no es pot desfer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel·lar
          </Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Notification */}
      <Snackbar
        open={showDeleteConfirmation}
        autoHideDuration={4000}
        onClose={() => setShowDeleteConfirmation(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          severity="success" 
          sx={{ width: "100%" }}
        >
          Llibre eliminat correctament!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default BookList;