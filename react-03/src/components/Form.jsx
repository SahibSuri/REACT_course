function handleSubmit(event){
    event.preventDefault()
    console.log("Form was submitted!!")
}

export default function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="type here" />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}