import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#782f40",
      light: "#aa5b6b",
      dark: "#48001a",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ceb888",
      light: "#ffeab8",
      dark: "#9c885b",
      contrastText: "#000000"
    },
    background: {
      default: "#36393f"
    }

  }
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline/>
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path={"/"} element={<div/>}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
