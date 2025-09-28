import React, {useEffect,useRef} from 'react'
import "./Nav.css"

const Nav = ({setTheme,theme}) => {
    const lightRef = useRef();
    const darkRef = useRef()

    useEffect(()=>{
        if(theme == "light"){
            lightRef.current.classList.add("hide-icon")
            darkRef.current.classList.remove("hide-icon")
            darkRef.current.classList.add("animate-theme")
            lightRef.current.classList.remove("animate-theme")

        }else{
            // lightRef.current.classList.add("hide-icon")
            lightRef.current.classList.remove("hide-icon")
            darkRef.current.classList.add("hide-icon")
            lightRef.current.classList.add("animate-theme")
            darkRef.current.classList.remove("animate-theme")
            }
},[theme])
  return (
    <nav className="navbar">
        <div className="nav-logo">
            <div className="light"></div>
            <h1>J</h1>
            <h1>G</h1>
        </div>
        <button onClick={()=>setTheme(theme=>theme == "light" ? "dark" : "light")}>
            <div className="btn-content">
            
            
                <div ref={darkRef} className="moon-parent">
                    <div className="moon-icon"></div>
                    <div className="star star-1"></div>
                    <div className="star star-2"></div>
                    <div className="star star-3"></div>
                </div>
            
             
                    <div ref={lightRef} className="sun-parent">
                        <div className="sun"></div>
                        <div style={{"--rotate":"45deg"}} className="ray ray-1"></div>
                        <div style={{"--rotate":"90deg"}} className="ray ray-2"></div>
                        <div style={{"--rotate":"135deg"}} className="ray ray-3"></div>
                        <div style={{"--rotate":"180deg"}} className="ray ray-4"></div>
                        <div style={{"--rotate":"225deg"}} className="ray ray-5"></div>
                        <div style={{"--rotate":"265deg"}} className="ray ray-6"></div>
                        <div style={{"--rotate":"315deg"}} className="ray ray-7"></div>
                        <div style={{"--rotate":"360deg"}} className="ray ray-8"></div>
                    </div>
                
                
            </div>
            {theme}
        </button>
    </nav>
  )
}

export default Nav