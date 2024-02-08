import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Tag from "./Pages/Tag";
import Category from "./Pages/Category";
import Portfolio from "./Pages/Portfolio";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/tag/:id" element={<Tag />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
