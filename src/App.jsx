import {useState} from "react"
import {Header,About,Nav} from "./components"
import './App.css'

function App() {
  const [theme,setTheme] = useState("dark")

  return (
    <div data-theme={theme} className="app">
      <div className="app-content">
      <Nav theme={theme} setTheme={setTheme}/>
      <Header/>
      <About/>
      </div>
    </div>
  )
}

export default App
