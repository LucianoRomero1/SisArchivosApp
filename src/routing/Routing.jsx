import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "../components/layout/generals/Error";
import { Home } from "../components/layout/private/Home";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { Login } from "../components/layout/public/Login";
import { PublicLayout } from "../components/layout/public/PublicLayout";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route> */}
        {/* <Route path="/social" element={<PrivateLayout />}>
          <Route index element={<Home />} />
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
