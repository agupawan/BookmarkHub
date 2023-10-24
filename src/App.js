import { Routes, Route} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Bookmarks from "./pages/BookmarkContainer/Bookmarks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/bookmark/:id" element={<Bookmarks/>} />
      </Routes>
      
    </div>
  );
}

export default App;
