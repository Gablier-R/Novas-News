import React, { createContext, useEffect, useState } from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./styles/app.css";


function App() {
  return (
    <NewsContextProvider>

    <News />
  
    </NewsContextProvider>
  );
}

export default App;
