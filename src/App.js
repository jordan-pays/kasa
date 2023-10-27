import "./App.css";
import Router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}
