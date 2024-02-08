import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Tag from "./Pages/Tag"
import Category from "./Pages/Category"

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/tag/:id" element={<Tag/>} />
        <Route path="/category/:id" element={<Category/>} />

      </Routes>
    </BrowserRouter>

  </div>;
}

export default App;
