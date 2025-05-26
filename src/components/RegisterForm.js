import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Container, 
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import { useLibrary } from "../context/LibraryContext";

function RegisterForm() {
  const navigate = useNavigate();
  const { user, registerUser } = useLibrary();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "estudiant"
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validacions
    const newErrors = {};
    if (!formData.email) newErrors.email = "L'email és obligatori";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) 
      newErrors.email = "L'email no és vàlid";
    
    if (!formData.name) newErrors.name = "El nom és obligatori";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Registre de l'usuari
    registerUser(formData);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper 
        elevation={3} 
        sx={{ 
          mt: 8, 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          Biblioteca Universitària
        </Typography>
        
        {!user ? (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correu electrònic"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nom complet"
              id="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
            
            <FormControl component="fieldset" sx={{ mt: 2, mb: 2 }}>
              <FormLabel component="legend">Tipus d'usuari</FormLabel>
              <RadioGroup
                row
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <FormControlLabel value="estudiant" control={<Radio />} label="Estudiant" />
                <FormControlLabel value="professor" control={<Radio />} label="Professor" />
                <FormControlLabel value="bibliotecari" control={<Radio />} label="Bibliotecari" />
              </RadioGroup>
            </FormControl>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar-se
            </Button>
          </Box>
        ) : (
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Benvingut, {user.name || user.email}!
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => navigate("/dashboard")}
              sx={{ mt: 2 }}
            >
              Anar al Dashboard
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default RegisterForm;