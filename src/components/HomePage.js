import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

const HomePage = ({
  movie,
  setMovie,
  poster,
  setPoster,
}) => {

  useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/")

    promise.then(e => {
      const posterArr = e.data
      console.log(posterArr)
      setPoster(posterArr)
    })

    promise.catch(e => {
      console.log(e.response.data)
    })
  }, [])

  return (
    <>
      <TitleBox>
        <p>Selecione o Filme</p>
      </TitleBox>
      <MovieContainer>
        <ul>
          {poster.map((a, index) =>
            <Link key={index} to={`/sessao/${a.id}`}>
              <li>
                <img src={a.posterURL} />
              </li>
            </Link>
          )}
        </ul>
      </MovieContainer>
    </>
  )
}

export default HomePage

const TitleBox = styled.section`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 24px;
        font-weight: 400;
        color: #293845;
    }
`

const MovieContainer = styled.section`
    width: 100%;

    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      
      li {
        width: 145px;
        height: 210px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: 12px auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 129px;
          height: 194px;
          margin: auto;
        }
      }
    }
`