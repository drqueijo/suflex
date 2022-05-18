import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Count from './components/Count'
import ThemeProvider from './components/templates/ThemeProvider/ThemeProvider';
import Home from './components/templates/Home/Home' 

function App() {
  return (
    <div className="app">
      <ThemeProvider />
      <Routes>
        {/* <Route path="/" element={<Count />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
