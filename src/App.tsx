import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddCustomer from "./pages/AddCustomer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/addCustomer" element={<AddCustomer />} />
      </Routes>
    </div>
  );
};
export default App;
