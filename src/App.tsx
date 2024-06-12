import { Routes, Route } from "react-router-dom";
import { ErrorPage, Home, Login, Signup } from "./pages";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
    </Routes>
  );
}

export default App;
