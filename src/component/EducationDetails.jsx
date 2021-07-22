const EducationaDetails=({next,prev,inputHandler,textValue})=>{
  const nextStep=()=>{
    next()

  } 
  const handleInput=(e)=>{
    let {name,value}=e.target
    inputHandler(name,value)

  }
  const previous=()=>{
    prev()

  }

  return(

    <>
    <h1>EducationaDetails</h1>
    HighSchool <input type="text" name="highschool" value={textValue.highschool} onChange={(e)=>handleInput(e)}/>
    InterMediate <input type="text" name="intemediate" value={textValue.intemediate} onChange={(e)=>handleInput(e)}/>
   <button onClick={nextStep}>Next</button>
   <button onClick={previous}>Pre</button>
    

    </>
  )
}
export default EducationaDetails