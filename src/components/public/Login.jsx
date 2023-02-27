import React from "react";

export const Login = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src="/favicon.png" alt="Logo Basso" width="310" height="180" />
      </div>
      <div className="text-center">
        <h2>Iniciar Sesión</h2>
        <form className="form-signin">
          <label htmlFor="username" className="sr-only">
            Usuario
          </label>
          <input
            type="text"
            className="form-control text-center"
            name="username"
            placeholder="Usuario"
            required
          />
          <label htmlFor="password" className="sr-only">
            Usuario
          </label>
          <input
            type="text"
            className="form-control text-center"
            name="password"
            placeholder="Password"
            required
          />
          <button class="mt-4 btn btn-lg btn-primary btn-block" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
