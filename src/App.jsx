import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <div>
        <Article name="Fatur" titles={["Reactjs", "Nextjs", "Nodejs"]} />
        <br />
        <Article name="Kenam" titles={["Vuejs", "Nuxtjs", "Deno"]} />
      </div>
    </>
  );
}

export default App;
