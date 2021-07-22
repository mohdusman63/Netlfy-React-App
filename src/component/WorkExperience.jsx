const WorkExperience=({next,prev,inputHandler,textValue})=>{
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
    <h1>WorkExperience</h1>
    Company Name <input type="text" value={textValue.companyName} name="companyName" onChange={(e)=>handleInput(e)}/>
   Designation <input type="text" name="designation" value={textValue.designation} onChange={(e)=>handleInput(e)}/>
   <button onClick={nextStep}>Next</button>
   <button onClick={previous}>Pre</button>

    </>
  )
}
export default WorkExperience