import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddCustomer from "./pages/AddCustomer";
import ActivateAccount from "./pages/ActivateAccount";
import Home from "./pages/Home";
import RequestForgetPassword from "./components/RequestForgetPassword";
import NewPassword from "./components/NewPassword";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<AddCustomer />} />
        <Route path="/activateAccount" element={<ActivateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/RequestForgetPassword"
          element={<RequestForgetPassword />}
        />
         <Route
          path="/NewPassword"
          element={<NewPassword />}
        />
      </Routes>
    </div>
  );
};
export default App;
