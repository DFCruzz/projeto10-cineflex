import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import GlobalStyles from "./GlobalStyles"
import MainContainer from "./MainContainer"
import Header from "./Header"
import HomePage from "./HomePage"
import SessionPage from "./SessionPage";


export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyles />
            <MainContainer>
            <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/sessao/1" element={<SessionPage />} />
                </Routes>
            </MainContainer>
        </BrowserRouter>
    )
}