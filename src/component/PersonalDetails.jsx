const PersonalDetails=({next,inputHandler,textValue})=>{
  

  const nextStep=()=>{
    next()

  } 
  const handleInput=(e)=>{
    let {name,value}=e.target
    inputHandler(name,value)

  }

  return(

    <>
    <h1>PersonalDetails</h1>
   FirstName <input type="text" name="firstName" value={textValue.firstName} onChange={(e)=>handleInput(e)}/>
   lastName <input type="text" name="lastName" value={textValue.lastName}  onChange={(e)=>handleInput(e)}/>
   <button onClick={nextStep}>Next</button>

    </>
  )
}
export default PersonalDetails