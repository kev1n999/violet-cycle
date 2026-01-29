import NavBar from "../components/home/NavBar";
import Main from "../components/home/Main";

export default function App() {
  return (
    <div>
      <header className="flex justify-center">
        <NavBar />
      </header>

      <main>
        <Main />
        <div className="flex justify-center">
          <div className="h-0.5 bg-violet-300 w-dvh"></div>
        </div>
      </main>
    </div>
  );
}
