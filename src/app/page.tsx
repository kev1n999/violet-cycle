import NavBar from "../components/home/NavBar";
import Main from "../components/home/Main";
import Footer from "../components/home/Footer";
import { Particles } from "../components/ui/particles";

export default function App() {
  return (
    <Particles className="relative min-h-screen bg-violet-200">
      <div>
        <header className="flex justify-center">
          <NavBar />
        </header>

        <main>
          <Main />
          <div className="hidden md:flex justify-center">
            <div className="h-0.5 bg-violet-300 w-dvh"></div>
          </div>
        </main>

        <footer className="flex justify-center items-center">
          <Footer />
        </footer>
      </div>
    </Particles>  );
}
