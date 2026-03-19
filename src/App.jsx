import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import State from "./components/State/State";
import User from "./components/User/User";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <About></About>
      <Contact></Contact>
      <State></State>
      <User></User>
      <Footer></Footer>
    </>
  );
}

export default App;
