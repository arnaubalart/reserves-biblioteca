import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el context
const LibraryContext = createContext();

// Hook personalitzat per utilitzar el context
export const useLibrary = () => useContext(LibraryContext);

export const LibraryProvider = ({ children }) => {
  // Llibres per defecte per inicialitzar la biblioteca
  const defaultBooks = [
    {
      id: "1",
      title: "Don Quixot",
      author: "Miguel de Cervantes",
      isbn: "9788424922580",
      available: true
    },
    {
      id: "2",
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      isbn: "9788497592208",
      available: true
    },
    {
      id: "3",
      title: "El Petit Príncep",
      author: "Antoine de Saint-Exupéry",
      isbn: "9788499309262",
      available: true
    },
    {
      id: "4",
      title: "1984",
      author: "George Orwell",
      isbn: "9788499890944",
      available: true
    },
    {
      id: "5",
      title: "La plaça del Diamant",
      author: "Mercè Rodoreda",
      isbn: "9788473290012",
      available: true
    }
  ];

  // Estats
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [reservations, setReservations] = useState([]);

  // Inicialització d'estats des de localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    } else {
      // Initialize with default books if none exist
      setBooks(defaultBooks);
      localStorage.setItem("books", JSON.stringify(defaultBooks));
    }

    const storedReservations = localStorage.getItem("reservations");
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations));
    }
  }, []);

  // Funció per registrar un usuari
  const registerUser = (userData) => {
    // Afegir id únic a l'usuari
    const newUser = {
      ...userData,
      id: Date.now().toString(),
    };
    
    // Actualitzar l'estat d'usuari
    setUser(newUser);
    
    // Guardar a localStorage per persistència
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Funció per tancar sessió
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Funcions per gestionar llibres
  const addBook = (book) => {
    const newBook = {
      ...book,
      id: Date.now().toString(),
      available: true
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const removeBook = (bookId) => {
    const updatedBooks = books.filter(book => book.id !== bookId);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    return true;
  };

  // Funcions per gestionar reserves
  const reserveBook = (bookId) => {
    if (!user) return false;

    // Actualitzar l'estat del llibre
    const updatedBooks = books.map(book => 
      book.id === bookId ? { ...book, available: false } : book
    );
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    // Crear la reserva
    const newReservation = {
      id: Date.now().toString(),
      bookId,
      userId: user.id,
      date: new Date().toISOString(),
    };
    const updatedReservations = [...reservations, newReservation];
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));

    return true;
  };

  const cancelReservation = (reservationId) => {
    // Trobar la reserva
    const reservation = reservations.find(r => r.id === reservationId);
    if (!reservation) return false;

    // Actualitzar l'estat del llibre
    const updatedBooks = books.map(book => 
      book.id === reservation.bookId ? { ...book, available: true } : book
    );
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));

    // Eliminar la reserva
    const updatedReservations = reservations.filter(r => r.id !== reservationId);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));

    return true;
  };

  // Funció auxiliar per obtenir les reserves d'un usuari
  const getUserReservations = () => {
    return reservations.filter(r => r.userId === user?.id);
  };

  // Context value
  const value = {
    user,
    books,
    reservations,
    registerUser,
    logout,
    addBook,
    removeBook,
    reserveBook,
    cancelReservation,
    getUserReservations
  };

  return (
    <LibraryContext.Provider value={value}>
      {children}
    </LibraryContext.Provider>
  );
};