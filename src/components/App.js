import GlobalStyles from "./GlobalStyles"
import MainContainer from "./MainContainer"
import Header from "./Header"
import ListContainer from "./ListContainer"


export default function App() {
    return (
        <>
            <GlobalStyles />
            <MainContainer>
                <Header />
                <ListContainer />
            </MainContainer>
        </>
    )
}