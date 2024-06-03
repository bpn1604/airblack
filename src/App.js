import Footer from "./components/Footer";
import Header from "./components/Header";
import Frame from "./components/Frame";
import "./App.css";
import FooterPage from "./components/FooterPage";
import FormComponent from "./components/FormComponent";
import CertificateComponent from "./components/CertificateComponent";

function App() {
  return (
    <Frame>
      <Header />
      <FormComponent />
      <FooterPage />
      <CertificateComponent />
      <Footer />
    </Frame>
  );
}

export default App;
