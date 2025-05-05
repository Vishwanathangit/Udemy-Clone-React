import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Saleimage from "./components/Saleimage"
import Recommended from "./components/Recommended"
import Topic from "./components/Topic"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App(){
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Saleimage></Saleimage>
        <Recommended></Recommended>
        <Topic></Topic>
        <Popular></Popular>
        <Footer></Footer>
        </>
    )
}

export default App