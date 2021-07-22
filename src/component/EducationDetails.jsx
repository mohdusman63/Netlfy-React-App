import React from "react";

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
      <div className="page-body-wrapper">
        <div className="content-wrapper ">
          <section className="reset-password">
            <div className="container">
              <div className="section-title">
                Educational Details
              </div>
              <div className="reset-password-box">
                <div className="form-feildset">
                  <input type="text" name="highschool"
                         placeholder="Highschool" value={textValue.highschool} onChange={(e)=>handleInput(e)}/>
                </div>
                <div className="form-feildset">
                  <input type="text"
                         placeholder="intemediate" name="intemediate" value={textValue.intemediate} onChange={(e)=>handleInput(e)}/>
                </div>
                <div className="form-feildset">
                  <button onClick={nextStep}>Next</button>
                </div>
                <div className="form-feildset">
                  <button onClick={previous}>Pre</button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    

    </>
  )
}
export default EducationaDetails