import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Count from './components/Count'
import  ThemeProvider from './components/templates/ThemeProvider/ThemeProvider';

function App() {
  return (
    <div className="app">
      <ThemeProvider />
      <Routes>
        <Route path="/" element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;
