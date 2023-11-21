import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddCustomer from "./pages/AddCustomer";
import ActivateAccount from "./pages/ActivateAccount";
import Main from "./pages/Main";
import WishlistPage from "./pages/WishlistPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<AddCustomer />} />
        <Route path="/activateAccount" element={<ActivateAccount />} />
        <Route path="/main" element={<Main />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
};
export default App;
