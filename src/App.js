import AppRouter from "./Router/Router";
import "./App.css";

function App() {
  console.warn = () => {};
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
