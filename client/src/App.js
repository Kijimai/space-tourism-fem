import Navigator from "./components/shared/Navigator.jsx"
import Home from "./components/home/Home.jsx"
import Test from "./components/shared/Test.jsx"
import DesignSystem from "./components/shared/DesignSystem.jsx"
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <Navigator />
      <Home />
      {/* <Test /> */}
      <DesignSystem />
    </div>
  )
}

export default App
