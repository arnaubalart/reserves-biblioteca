// filepath: c:\Users\arnau\Documents\UNI\2n\Eng_software\lab6\reserves-biblioteca\src\App.js
import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LibraryProvider, useLibrary } from "./context/LibraryContext";
import RegisterForm from "./components/RegisterForm";
import MainDashboard from "./components/MainDashboard";

// Component per a rutes protegides
function ProtectedRoute({ children }) {
  const { user } = useLibrary();
  return user ? children : <Navigate to="/" />;
}

function AppRoutes() {
  const { user } = useLibrary();
  
  return (
    <Routes>
      <Route path="/" element={!user ? <RegisterForm /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <MainDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default function App() {
  return (
    <LibraryProvider>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LibraryProvider>
  );
}