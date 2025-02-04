import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name === "",
      email: formData.email === "",
      password: formData.password === "",
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      console.log("Form Submitted", formData);
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 2,
        mb: 5,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h5" textAlign="center" mb={2}>
        Sign Up
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        helperText={errors.name ? "Name is required" : ""}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        helperText={errors.email ? "Email is required" : ""}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        helperText={errors.password ? "Password is required" : ""}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
