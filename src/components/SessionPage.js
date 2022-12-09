import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";



const SessionPage = ({
    movie,
    setMovie,
    session,
    setSession,
}) => {

    const { movieId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`)

        promise.then(e => {
            const sessionArr = e.data
            console.log(sessionArr)
            setSession(sessionArr.days)
            setMovie(sessionArr)
        })

        promise.catch(e => {
            console.log(e.response.data)
        })
    }, [])

    if(session.length === 0 || movie.length === 0 ) {
        return (
            <div>Carregando....</div>
        )
    }

    return (
        <>
            <TitleBox>
                <p>Selecione o horário</p>
            </TitleBox>
            <SectionContainer>
                {session.map((a, index) =>
                    <div key={a.id}>
                        <h2>{a.weekday} {a.date}</h2>
                        <ul>
                            {session[index].showtimes.map(b =>
                                <li key={b.id}>{b.name}</li>
                            )}
                        </ul>
                    </div>
                )}
            </SectionContainer>
            <FooterContainer>
                <PosterBox>
                    <img src={movie.posterURL} />
                </PosterBox>
                <div>
                    <p>{movie.title}</p>
                </div>
            </FooterContainer>
        </>
    )
}

export default SessionPage



const TitleBox = styled.section`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 67px;

    p {
        font-size: 24px;
        font-weight: 400;
        color: #293845;
    }
`

const SectionContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 117px;

    div {
        display: flex;
        flex-direction: column;

        h2 {
        display: flex;
        color: #293845;
        font-weight: 400;
        font-size: 20px;
        margin-left: 24px;
        margin-bottom: 24px;
        }
        
        ul {
            display: flex;
            margin: 0 24px;
            margin-bottom: 16px;
            flex-wrap: wrap;

            li {
                display: flex;
                width: 83px;
                height: 43px;
                justify-content: center;
                align-items: center;
                color: #FFFFFF;
                background-color: #E8833A;
                margin-right: 6px;
                margin-bottom: 8px;
                border-radius: 3px;                
            }
        }
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