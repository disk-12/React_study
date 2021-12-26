import "./styles.css";
import { Nav } from "./components/Nav/Nav";

export const App = () => {
  const a = 1;
  const b = 2;
  return (
    <div className="App">
      <Nav />
      <h1>{a + b}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};
