import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { Global } from "../../helpers/Global";

export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");
  const { setAuth } = useAuth();

  const loginUser = async (e) => {
    e.preventDefault();

    let userToLogin = form;
    const request = await fetch(Global.url + "user/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();
    if (data.status == "success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSaved("logged");
      setAuth(data.user);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      setSaved("error");
    }
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src="/favicon.png" alt="Logo Basso" width="310" height="180" />
      </div>
      <div className="text-center">
        <h2>Iniciar Sesión</h2>
        <form className="form-signin" onSubmit={loginUser}>
          <label htmlFor="username" className="sr-only">
            Usuario
          </label>
          <input
            type="text"
            className="form-control text-center"
            name="username"
            placeholder="Usuario"
            onChange={changed}
            required
          />
          <label htmlFor="password" className="sr-only">
            Usuario
          </label>
          <input
            type="password"
            className="form-control text-center"
            name="password"
            placeholder="Password"
            onChange={changed}
            required
          />

          <button
            className="mt-4 btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
