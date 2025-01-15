import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navabr";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
