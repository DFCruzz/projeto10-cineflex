import { Link } from "react-router-dom";
import styled from "styled-components";

const SeatsPage = ({ }) => {
    return (
        <>
            <TitleBox>
                <p>Selecione o(s) assento(s)</p>
            </TitleBox>
            <SeatsContainer>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
                <li>
                    <p>01</p>
                </li>
            </SeatsContainer>
            <CaptionContainer>
                <div>
                    <div></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div></div>
                    <p>Indisponível</p>
                </div>
            </CaptionContainer>
            <FormsContainer>
                <div>
                    <p>Nome do Comprador:</p>
                    <input type="text" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <p>CPF do Comprador:</p>
                    <input type="text" placeholder="Digite seu CPF..." />
                </div>
                <button type="submit">Reservar assento(s)</button>
            </FormsContainer>
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
        border: 1px solid #808F9D;
        border-radius: 12px;
        margin: 12px 4px;

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

export default SeatsPage