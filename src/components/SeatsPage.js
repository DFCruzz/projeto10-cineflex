import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SeatsPage = ({
    movie,
    setMovie,
    session,
    setSession,
    seats,
    setSeats,
    time,
    setTime,
    selectedSeats,
    setSelectedSeats,
    buyerName,
    setBuyerName,
    buyerId,
    setBuyerId,
    seatNumbers,
    setSeatNumbers,
}) => {

    const { sessionId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`)

        promise.then(e => {
            const seatsArr = e.data
            console.log(seatsArr)
            setTime(seatsArr)
            setMovie(seatsArr.movie)
            setSession(seatsArr.day)
            setSeats(seatsArr.seats)
        })

        promise.catch(e => {
            console.log(e.response.data)
        })
    }, [])

    function selectSeat(event) {

        if (selectedSeats.includes(event.id)) {
            setSelectedSeats(selectedSeats => selectedSeats.filter(e => e !== event.id))
            setSeatNumbers(seatNumbers => seatNumbers.filter(e => e !== event.name))
        }
        else {
            setSelectedSeats([...selectedSeats, event.id])
            setSeatNumbers([...seatNumbers, event.name])
        }
    }

    function unavailableSeat() {
        alert("Esse assento não está disponível")
    }

    function finishPurchase (event) {
		event.preventDefault()
        console.log(selectedSeats)


		const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids: [...selectedSeats],
			name: buyerName,
			cpf: buyerId,
		})

		request.then(() => navigate("/sucesso")) 

		request.catch(e => {
            console.log(e.response.data)
        })
	}

    return (
        <>
            <TitleBox>
                <p>Selecione o(s) assento(s)</p>
            </TitleBox>
            <SeatsContainer>
                {seats.map(a =>
                    <li key={a.id} data-test="seat" onClick={a.isAvailable ? () => selectSeat(a) : unavailableSeat} className={!a.isAvailable ? "not-available" :
                        selectedSeats.includes(a.id) ? "selected" : null}>
                        <p>{a.name}</p>
                    </li>
                )}
            </SeatsContainer>
            <CaptionContainer>
                <div>
                    <div className="selected" ></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="not-available"></div>
                    <p>Indisponível</p>
                </div>
            </CaptionContainer>
            <FormsContainer onSubmit={finishPurchase}>
                <div>
                    <p>Nome do Comprador:</p>
                    <input type="text" data-test="client-name" value={buyerName} onChange={e => setBuyerName(e.target.value)} placeholder="Digite seu nome..." required />
                </div>
                <div>
                    <p>CPF do Comprador:</p>
                    <input type="number" data-test="client-cpf" value={buyerId} onChange={e => setBuyerId(e.target.value)} placeholder="Digite seu CPF..." required />
                </div>
                <button type="submit" data-test="book-seat-btn">Reservar assento(s)</button>
            </FormsContainer>
            <FooterContainer data-test="footer">
                <PosterBox>
                    <img src={movie.posterURL} />
                </PosterBox>
                <div>
                    <p>{movie.title}</p>
                    <p>{session.weekday} {time.name}</p>
                </div>
            </FooterContainer>
        </>
    )
}

const TitleBox = styled.section`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;

    p {
        font-size: 24px;
        font-weight: 400;
        color: #293845;
    }
`

const SeatsContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
        width: 26px;
        height: 26px;
        background: #C3CFD9;
        border: 1px solid;
        border-color: #808F9D;
        border-radius: 12px;
        margin: 12px 4px;

        &.not-available {
            background: #FBE192;
            border: 1px solid #F7C52B;  
        }

        &.selected {
            background: #1AAE9E;
            border: 1px solid #0E7D71; 
        }

        p {
            width: 100%;
            height: 100%;
            color: #000000;
            font-weight: 400;
            font-size: 11px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

const CaptionContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;

    div {
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            width: 25px;
            height: 25px;
            background: #C3CFD9;
            border: 1px solid #808F9D;
            border-radius: 12px;

            &.not-available {
                background: #FBE192;
                border: 1px solid #F7C52B;  
            }

            &.selected {
                background: #1AAE9E;
                border: 1px solid #0E7D71; 
            } 
        }

        p {
            margin-top: 8px;
            font-weight: 400;
            font-size: 13px;
            color: #4E5A65;
        }
    }
`

const FormsContainer = styled.form`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 18px 0;
    padding-bottom: 140px;
    

    div {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin-bottom: 18px;

        p {
            font-size: 18px;
            font-weight: 400;
            color: #293845;
            margin-bottom: 4px;
        }

        input {
            height: 50px;
            width: 100%;
            background: #FFFFFF;
            border: 1px solid #D4D4D4;
            border-radius: 3px;
        }
    }

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
    }
`

const FooterContainer = styled.section`
    width: 100%;
    height: 117px;
    display: flex;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
    align-items: center;

    div {
        color: #293845;
        font-weight: 400;
        font-size: 26px;
    }
`

const PosterBox = styled.div`
    width: 64px;
    height: 89px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    margin: 0 10px;
    justify-content: center;
    align-items: center;

    img {
        width: 48px;
        height: 72px;
        margin: auto;
    }
`

export default SeatsPage