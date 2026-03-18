import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import State from "./components/State/State";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <State></State>
      <Footer></Footer>
    </>
  );
}

export default App;
