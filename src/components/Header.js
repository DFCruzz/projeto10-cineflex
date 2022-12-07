import styled from "styled-components";

export default function Header() {
    return (
        <AppHeader>
            <p>CINEFLEX</p>
        </AppHeader>
    )
}

const AppHeader = styled.header`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: #E8833A;
        font-size: 34px;
        font-weight: 400;
    }
`