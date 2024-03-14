import "./App.css";
import HomeSection from "./components/fragments/Home/HomeSection";
import NavbarPage from "./pages/NavbarPage";
function App() {
  return (
    <>
      <header>
        <NavbarPage />
        <div className="container w-full mx-auto">
          <div className="min-h-screen bg-[url('./assets/images/bgHome.jpg')] bg-cover bg-center">
            <HomeSection />
          </div>
        </div>
      </header>

      <main></main>
    </>
  );
}

export default App;
