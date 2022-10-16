import { Routes, Route } from "react-router-dom"
import Navigator from "./components/shared/Navigator.jsx"
import Home from "./components/home/Home.jsx"
import Destination from "./components/destination/Destination.jsx"
import Crew from "./components/crew/Crew.jsx"
import Technology from "./components/technology/Technology.jsx"
import DesignSystem from "./components/shared/DesignSystem.jsx"
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      {/* <DesignSystem /> */}
    </div>
  )
}

export default App
