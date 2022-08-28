import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<div>this is root!</div>} />
        <Route path="/test" element={<div>this is test</div>} />
      </Routes>
    </BrowserRouter>
  );
}
