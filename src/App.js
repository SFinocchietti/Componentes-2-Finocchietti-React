import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./components/ItemListContainer.js"
import Contador from "./components/Contador"



const App = () => {
    return( <>        
        <Header/> 
        <Main>
        <p>Proximamente información para inversores</p>
        <Contador/>           
        </Main>
        <Footer/>        
        </>
        )
}

export default App

