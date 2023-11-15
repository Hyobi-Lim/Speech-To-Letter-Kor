import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./page/MainPage";
import EditPage from "./page/EditPage";

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="editpage" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;