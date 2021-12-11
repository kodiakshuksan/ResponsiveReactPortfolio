import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "../App";
import Home from "./pages/HomePage";
import About from "./routes/about";
import Resume from "./routes/resume";
import Portfolio from "./portfolio";
import Contact from "./contact";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="HomePage" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="resume" element={<Resume />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);