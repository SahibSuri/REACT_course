function printHello(event){
    console.log("Hello Sahib JI")
    console.log(event)
}

function printBye(){
    console.log("Bye Bye JI")
}

function handleMouseOver(){
    console.log("KYA HAI! kyu CHEDH raha HAI??")
}

function handleDBclick(){
    console.log("DO baar kyu daba raha hai????")
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>GREET</button>
            <hr />
            <button onClick={printBye}>BYE</button>
            <hr />
            <p onMouseOver={handleMouseOver}>Sahib Suri 
                Btech CSE (2024-28)
                Amity University Noida 
                preparing for UPSC CSE 
                Have a nice Day!!!
            </p>
            <hr />
            <button onDoubleClick={handleDBclick}>BRO!!!!</button>
        </div>
    )
}