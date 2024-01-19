import React, { useState } from "react";
import "./styles.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // console.log("auth");
        // console.log(auth);

        // console.log("email");
        // console.log(auth.user.email);

        if (auth) {
          toast.success(`Bienvenido ${auth.user.email.split("@")[0]}`);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Email o contraseña incorrectos`);
      });

    // const result = await signInWithEmailAndPassword(auth, email, password);

    // console.log("result");
    // console.log(result);

    // console.log("email");
    // console.log(result.user.email);

    // if (result.user) {
    //   toast.success(`Bienvenido ${result.user.email.split("@")[0]}`);
    //   navigate("/");
    // } else {
    //   console.log("NO PASA NADA");
    //   toast.error(`Email o contraseña incorrectos`);
    // }

    // signInWithEmailAndPassword(email, password)
    //   .then((authUser) => {
    //     navigate("/");
    //   })
    //   .catch((error) => alert(error));
  };

  const register = async (e) => {
    e.preventDefault();

    // createUserWithEmailAndPassword(email, password)
    //   .then((authUser) => {
    //     // Si hemos creado el usuario
    //     if (authUser) {
    //       navigate("/");
    //     }
    //   })
    //   .catch((error) => alert(error.message));

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log("auth");
        console.log(auth);

        console.log("email");
        console.log(auth.user.email);

        if (auth) {
          toast.success(`Bienvenido ${auth.user.email.split("@")[0]}`);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(`El email tiene que ser válido y la contraseña tener más de 6 caracteres`);
      });

    // const result = await createUserWithEmailAndPassword(auth, email, password);

    // console.log("result");
    // console.log(result);

    // console.log("email");
    // console.log(result.user.email);

    // if (result) {
    //   navigate("/");
    // }
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
