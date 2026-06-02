import { useState } from "react"
export default function LudoBoard(){
    let [Moves , setMoves] = useState({blue: 0 , red: 0 , yellow: 0 , green: 0})
    let[arr , setarr] = useState(["no moves"])
    function updateBlue(){
        // Moves.blue += 1
        console.log(`moves blue: ${Moves.blue}`)
        // setMoves((prevMoves) =>{
        //     return {...prevMoves , blue: prevMoves.blue +1}
        // })
        
        setarr((prevarr) => {return [...prevarr , "blue moves"]})
        console.log(arr)
    }
    function updateYellow(){
        // Moves.blue += 1
        console.log(`moves yellow: ${Moves.yellow}`)
        setMoves((prevMoves) =>{
            return {...prevMoves , yellow: prevMoves.yellow + 1}
        })
    }
    function updateRed(){
        // Moves.blue += 1
        console.log(`moves red: ${Moves.red}`)
        setMoves((prevMoves) =>{
            return {...prevMoves , red: prevMoves.red + 1}
        })
    }
    function updateGreen(){
        // Moves.blue += 1
        console.log(`moves green: ${Moves.green}`)
        setMoves((prevMoves) =>{
            return {...prevMoves , green: prevMoves.green + 1}
        })
    }

    return(
        <div>
            <p>{arr}</p>
            <p>Game Starts</p>
            <div className="board">
                <p>Blue Moves = {Moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue} >+1</button>

                <p>Red Moves = {Moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed} >+1</button>

                <p>Yellow Moves = {Moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow} >+1</button>

                <p>Green Moves = {Moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen} >+1</button>

            </div>
        </div>
    )
}