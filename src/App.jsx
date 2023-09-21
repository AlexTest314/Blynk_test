import "./App.css";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
