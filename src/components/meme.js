import React from "react"

export default function Meme(){
    // const clickBtn = document.getElementById("meme--button")
    // clickBtn.addEventListener("click", function(){
    //     console.log("button clicked")
    // })
    
    return(
        <div className="meme--section">
            <div className="meme--inputs">
                <input type="text" placeholder="Top Text"></input>
                <input type="text" placeholder="Bottom Text"></input>
            </div>
            <button className="meme--button" id="meme--button">Get a new meme image</button>
        </div>
    )
}