import Businesses from "./components/businesses/Businesses";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Specialist from "./components/specialist/Specialist";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import WhyFinancy from "./components/whyFinancy/WhyFinancy";
import Features from "./components/features/Features";
import Peyment from "./components/peyment/Peyment";
import Contact from './components/contact/Contact';
import DowloadApp from "./components/downloadApp/DowloadApp";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Businesses />
      <WhyFinancy />
      <WhyChooseUs />
      <Specialist />
      <Features />
      <Peyment />
      <Contact />
      <DowloadApp />
      <Footer />
    </div>
  );
}

export default App;
