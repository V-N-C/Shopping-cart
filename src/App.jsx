import "./App.css";
import Navbar from "./navbar";
import Carousel from "./carousels";
import Listings from "./listings";
import Footer from "./footer";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  
  const handleInc = () => {
    setCount((previous) => previous + 1);
  };
  
  const handleDec = () => {
    setCount((previous) => previous - 1);
  };

  return (
    <>
      <header>
       
        <Navbar count={count} />
        <Carousel />
      </header>
      <main>
       
        <Listings handleInc={handleInc} handleDec={handleDec} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;