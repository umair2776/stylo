import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import navbar from "./components/navbar.css";
import cards from "./components/cards.css"
import Watches from "./components/Watches";
import watches from "./components/watches.css"
import Flex from "./components/Flex";
import flex from "./components/flex.css"
import Dayout from "./components/Dayout";
import dayout from "./components/dayout.css"
import Stories from "./components/Stories";
import stories from "./components/stories.css"
import Paragraphs from "./components/Paragraphs";
import paragraphs from "./components/paragraph.css"
import Signup from "./components/Signup";
import signup from "./components/signup.css"
import Footer from "./components/Footer";
import footer from "./components/footer.css"
function App() { 
  return (
    <>
    <Navbar/>
    <Cards/>
    <Watches/>
    <Flex/>
    <Dayout/>
    <Stories/>
    <Paragraphs/>
    <Signup/>
    <Footer/>
   </>
  );
}

export default App;
