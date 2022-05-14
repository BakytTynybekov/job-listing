import FilterField from "./components/Filter/Filter";
import Employees from "./components/Main/Employees/Employees";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <FilterField />
      </header>
      <main className="main">
        <Employees />
      </main>
    </div>
  );
}
