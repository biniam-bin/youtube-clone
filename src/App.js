import Header from "./components/header/Header"
import Sidebar from './components/sidebar/Sidebar'
import {Container} from "react-bootstrap"
import HomeScreen from "./screen/homeScreen/HomeScreen"
import "./screen/homeScreen/_app.scss"
import React, {useState} from "react"

function App() {

  const [sidebar, togglesidebar] = useState(false)

  const  handleToggleSideBar = () => togglesidebar(value => !value)
  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar}/>
      <div className="app_container border ">
        <Sidebar sidebar={sidebar} handleToggleSideBar={handleToggleSideBar}/>
        <Container fluid className="app_main border ">
          <HomeScreen/>
        </Container>
      </div>
    </>
      
  );
}

export default App;
