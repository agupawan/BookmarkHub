import { Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import HomePage from "./pages/HomePage";
import Bookmarks from "./pages/BookmarkContainer/Bookmarks";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/bookmark" element={<Bookmarks/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
      </Routes>
      <Toaster />
      
    </div>
  );
}

export default App;
