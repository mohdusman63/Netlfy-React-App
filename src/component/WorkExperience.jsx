import React from "react";

const WorkExperience = ({next, prev, inputHandler, textValue}) => {
    const nextStep = () => {
        next()

    }
    const handleInput = (e) => {
        let {name, value} = e.target
        inputHandler(name, value)

    }
    const previous = () => {
        prev()

    }


    return (

        <>
            <div>
                <div className="page-body-wrapper">
                    <div className="content-wrapper ">
                        <section className="reset-password">
                            <div className="container">
                                <div className="section-title">
                                   Work Experience
                                </div>
                                <div className="reset-password-box">
                                    <div className="form-feildset">
                                        <input type="text" value={textValue.companyName} name="companyName"
                                               placeholder="companyName" onChange={(e) => handleInput(e)}/></div>
                                    <div className="form-feildset">
                                        <input type="text" name="designation" value={textValue.designation}
                                               placeholder="Designation"    onChange={(e) => handleInput(e)}/>
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

            </div>

        </>
    )
}
export default WorkExperience