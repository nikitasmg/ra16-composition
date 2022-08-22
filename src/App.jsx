import Card from "./components/Cards/card/Card.jsx";
import CardBody from "./components/Cards/cardBody/CardBody.jsx";
import News from "./components/Decomposition/News/News.jsx";
import Search from "./components/Decomposition/Search/Search.jsx";
import Advertising from "./components/Decomposition/UI/Advertising/Advertising.jsx";
import ThemesList from "./components/Decomposition/Themes/ThemesList/ThemesList.jsx";


function App() {

  return (
    <div style={{padding:40}}>
        <News/>
        <Search/>
        <Advertising/>
        <ThemesList/>
    </div>
  )
}

export default App
