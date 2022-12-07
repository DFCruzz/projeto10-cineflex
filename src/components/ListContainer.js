import styled from "styled-components";
import image1 from "./img/image2.jpg";

const ListContainer = ({ }) => {
    return (
        <>
            <TitleBox>
                <p>Selecione o Filme</p>
            </TitleBox>
            <MoviesContainer>
                <MovieList>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                </MovieList>
                <MovieList>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                    <MovieBox>
                        <img src={image1} />
                    </MovieBox>
                </MovieList>
            </MoviesContainer>
        </>
    )
}

export default ListContainer

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

const MoviesContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const MovieList = styled.ul`
    width: 100%;
`

const MovieBox = styled.li`
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
`