import { Link } from "react-router-dom";
import styled from "styled-components";



const SessionPage = ({ }) => {

    const dataArr = [{
        "id": 1,
        "title": "Zack Snyder Justice League",
        "posterURL": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
        "overview": "Determined to ensure Superman ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
        "releaseDate": "2021-03-18T00:00:00.000Z",
        "days": [
            {
                "id": 24102021,
                "weekday": "Domingo",
                "date": "24/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 1
                    },
                    {
                        "name": "19:00",
                        "id": 2
                    }
                ]
            },
            {
                "id": 25102021,
                "weekday": "Segunda-feira",
                "date": "25/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 3
                    },
                    {
                        "name": "19:00",
                        "id": 4
                    }
                ]
            },
            {
                "id": 26102021,
                "weekday": "Terça-feira",
                "date": "26/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 5
                    },
                    {
                        "name": "19:00",
                        "id": 6
                    }
                ]
            },
            {
                "id": 27102021,
                "weekday": "Quarta-feira",
                "date": "27/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 7
                    },
                    {
                        "name": "19:00",
                        "id": 8
                    }
                ]
            },
            {
                "id": 28102021,
                "weekday": "Quinta-feira",
                "date": "28/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 9
                    },
                    {
                        "name": "19:00",
                        "id": 10
                    }
                ]
            },
            {
                "id": 29102021,
                "weekday": "Sexta-feira",
                "date": "29/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 11
                    },
                    {
                        "name": "19:00",
                        "id": 12
                    }
                ]
            },
            {
                "id": 30102021,
                "weekday": "Sábado",
                "date": "30/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 13
                    },
                    {
                        "name": "19:00",
                        "id": 14
                    }
                ]
            },
            {
                "id": 31102021,
                "weekday": "Domingo",
                "date": "31/10/2021",
                "showtimes": [
                    {
                        "name": "15:00",
                        "id": 15
                    },
                    {
                        "name": "19:00",
                        "id": 16
                    }
                ]
            }
        ]
    }]

    const mockSession = dataArr[0].days


    return (
        <>
            <TitleBox>
                <p>Selecione o horário</p>
            </TitleBox>
            <SectionContainer>
                {mockSession.map((a, index) =>
                    <div key={a.id}>
                        <h2>{a.weekday} {a.date}</h2>
                        <ul>
                            {mockSession[index].showtimes.map(b =>
                                <li key={b.id}>{b.name}</li>
                            )}
                        </ul>
                    </div>
                )}
            </SectionContainer>
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

    p {
        font-size: 24px;
        font-weight: 400;
        color: #293845;
    }
`

const SectionContainer = styled.section`
    width: 100%;

    div {
        display: flex;
        flex-direction: column;

        h2 {
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
