import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "../components/layout/Error";
import { Home } from "../components/private/Home";
import { PrivateLayout } from "../components/private/PrivateLayout";
import { Login } from "../components/public/Login";
import { PublicLayout } from "../components/public/PublicLayout";
import { AuthProvider } from "../context/AuthProvider";

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/social" element={<PrivateLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
