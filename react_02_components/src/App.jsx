import React from "react"
function Title(){
  return <h1>I am a title</h1>
}

function Description(){
  return <p>Hello i am a description body!</p>
}

function App(){
  return(
    <div>
      <Title/>
      <Description/>
      <Title/>
      <Description/>
      <Title/>
      <Description/>
      <Title/>
      <Description/>
    </div>
  )
}

export default App