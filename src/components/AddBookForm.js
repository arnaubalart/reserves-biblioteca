import React, { useState } from "react";
import { Box, TextField, Button, Snackbar, Alert, Typography } from "@mui/material";
import { useLibrary } from "../context/LibraryContext";

function AddBookForm() {
const { books, addBook, removeBook, user } = useLibrary();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [undoData, setUndoData] = useState(null);

  // Only show the form for admin or bibliotecari roles
  if (!user || (user.role !== "admin" && user.role !== "bibliotecari")) return null;

  const handleSubmit = e => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
      isbn,
      available: true
    };
    
    // Use the addBook function from context
    addBook(newBook);
    
    setUndoData(newBook);
    setShowConfirmation(true);
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

const handleUndo = () => {
  if (!undoData) return;
  
  removeBook(undoData.id);
  setShowConfirmation(false);
  setUndoData(null);
};

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Afegir nou llibre
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Títol"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Autor"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="ISBN"
            value={isbn}
            onChange={e => setIsbn(e.target.value)}
            required
            fullWidth
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ alignSelf: "flex-start" }}
          >
            Afegir llibre
          </Button>
        </Box>
      </form>
      <Snackbar
        open={showConfirmation}
        autoHideDuration={4000}
        onClose={() => setShowConfirmation(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          severity="success" 
          sx={{ width: "100%" }}
          action={
            <Button color="inherit" size="small" onClick={handleUndo}>
              Desfer
            </Button>
          }
        >
          Llibre afegit correctament!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AddBookForm;