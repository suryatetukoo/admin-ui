import React, { useState } from 'react';
import axios from 'axios';
import AuthLayout from '../components/Layouts/AuthLayout';
import FormSignUp from '../components/Fragments/FormSignUp';
import AppSnackbar from '../components/Elements/AppSnackbar';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (values) => {
    try {
      await axios.post("https://jwt-auth-eight-neon.vercel.app/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      setSnackbar({
        open: true,
        message: "Register Berhasil! Silakan Login.",
        severity: "success",
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "Email sudah pernah digunakan sebelumnya",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout title="Register">
      <FormSignUp onSubmit={handleRegister} />
      
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
};

export default SignUpPage;
