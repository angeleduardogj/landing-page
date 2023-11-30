import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div
      className={
        "w-full j-screen overflow-hidden bg-site bg-cover bg-no-repeat"
      }
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Nav />
      <Header />
    </div>
  );
};

export default App;
