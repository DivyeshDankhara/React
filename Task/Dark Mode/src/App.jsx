import "./App.css";
import ThemeContextProvider from "./Contex/ThemeContextProvider";
import Card from './components/Card'
import Button from "./components/Button";

function App() {

  return (
    <>
    <div className="dark:bg-gray-800 h-svh">
    <h1 className="heading">This is App Components</h1>
      <ThemeContextProvider>
        <div className="p-2 flex justify-start">
          <Button/>
        </div>
        <div>
          <Card/>
        </div>
      </ThemeContextProvider>
    </div>
    </>
  );
}

export default App;