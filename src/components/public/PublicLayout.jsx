import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const PublicLayout = () => {
  const { auth, loading } = useAuth();
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <section className="layout__content">
          {!auth._id ? <Outlet /> : <Navigate to="/social" />}
        </section>
      </>
    );
  }
};
