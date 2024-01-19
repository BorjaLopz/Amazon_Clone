import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/StateProvider.jsx";
import reducer, { initialState } from "./components/reducer.js";
import firebase_CF from "./components/firebase_CF.js";
import { FirebaseAppProvider } from "reactfire";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebase_CF}>
      <Suspense fallback={<p>Cargando...</p>}>
        <BrowserRouter>
          <StateProvider initialState={initialState} reducer={reducer}>
            <App />
          </StateProvider>
        </BrowserRouter>
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
);
