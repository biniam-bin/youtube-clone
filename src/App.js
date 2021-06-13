import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar'
import {Container} from "react-bootstrap"
import HomeScreen from "./screen/homeScreen/HomeScreen"
import "./screen/homeScreen/_app.scss"

function App() {
  return (
    <>
      <Header/>
      <div className="app_container border border-info">
        <Sidebar/>
        <Container fluid className="app_main border border-warning">
          <HomeScreen/>
        </Container>
      </div>
    </>
      
  );
}

export default App;
