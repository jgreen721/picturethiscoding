import React from 'react'
import "./Header.css"

const Header = ({theme}) => {
  return (
    <header className="header">
        <div className="header-content">
            <div className={`header-img-div ${theme == "dark" ? "mask-img" : ""}`}>
                <img src="programming.jpg" alt="" />
            </div>
            <div className="header-main-content">
                <div className="tag-div">{`<`}</div>
                <div className="header-text-content">
                    <h1>Picture</h1>
                    <div className="captions-div">
                       <div className="this-div">
                      <h3>
                          <span>T</span>
                          <span>h</span>
                          <span>i</span>
                          <span>s</span>
                      </h3>
                    </div>
                        <div>
                        <h5 className="header-caption">JG<span className="bold">Devs</span> Coding Portfolio</h5>
                    </div> 
                    </div>     
                </div>
                <div className="tag-div">{`/>`}</div>
            </div>
        </div>
    </header>
  )
}

export default Header