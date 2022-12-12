import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import GlobalStyles from "./GlobalStyles"
import MainContainer from "./MainContainer"
import Header from "./Header"
import HomePage from "./HomePage"
import SessionPage from "./SessionPage";
import SeatsPage from "./SeatsPage";


export default function App() {

    const [poster, setPoster] = useState([])
    const [movie, setMovie] = useState([])
    const [session, setSession] = useState([])
    const [seats, setSeats] = useState([])

    return (
        <BrowserRouter>
            <GlobalStyles />
            <MainContainer>
                <Header />
                <Routes>
                    <Route
                    path="/"
                    element={<HomePage
                            poster={poster}
                            setPoster={setPoster}
                            movie={movie}
                            setMovie={setMovie}
                        />}
                    />
                    <Route
                    path="/sessao/:movieId"
                    element={<SessionPage
                            movie={movie}
                            setMovie={setMovie}
                            session={session}
                            setSession={setSession}
                        />} 
                    
                    />
                    <Route
                        path="/assentos/:sessionId"
                        element={<SeatsPage
                            movie={movie}
                            setMovie={setMovie}
                            session={session}
                            setSession={setSession} 
                            seats={seats}
                            setSeats={setSeats}
                        />}
                    />
                </Routes>
            </MainContainer>
        </BrowserRouter>
    )
}