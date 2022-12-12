import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SuccessPage = ({
    poster,
    setPoster,
    movie,
    setMovie,
    session,
    setSession,
    setSeats,
    time,
    setTime,
    setSelectedSeats,
    buyerName,
    setBuyerName,
    buyerId,
    setBuyerId,
    seatNumbers,
    setSeatNumbers,
}) => {

    function resetStates() {
        setPoster = ([])
        setMovie = ([])
        setSession = ([])
        setSeats = ([])
        setTime = ([])
        setSelectedSeats = ([])
        setSeatNumbers = ([])
        setBuyerName = ("")
        setBuyerId = ("")
    }

    return (
        <>
            <TitleBox>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </TitleBox>
            <ContentBox>
                <h2>Filme e Sessão</h2>
                <p>{movie.title}</p>
                <p>{session.date} {time.name}</p>
            </ContentBox>
            <ContentBox>
                <h2>Ingressos</h2>
                {seatNumbers.map(a =>
                    <p>Assento {a}</p>
                )}
            </ContentBox>
            <ContentBox>
                <h2>Comprador</h2>
                <p>{buyerName}</p>
                <p>{buyerId}</p>
            </ContentBox>
            <FinishButton>
                <Link to="/">
                    <button onClick={resetStates}>Voltar para Home</button>
                </Link>
            </FinishButton>
        </>
    )
}

export default SuccessPage

const TitleBox = styled.section`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 67px;

    p {
        font-size: 24px;
        font-weight: 700;
        color: #247A6B;
        margin-bottom: 6px;
    }
`

const ContentBox = styled.section`
    width: 100%;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    margin: 18px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 6px; 
    }

    p {
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 6px;
    }
`
const FinishButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 60%;
        height: 42px;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
        margin-top: 32px;
        margin-left: auto;
        margin-right: auto;
    }
`