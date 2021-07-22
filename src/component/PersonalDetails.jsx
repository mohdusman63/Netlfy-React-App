import React from "react";
import './style.css'

const PersonalDetails = ({next, inputHandler, textValue}) => {
    const nextStep = () => {
        next()

    }
    const handleInput = (e) => {
        let {name, value} = e.target
        inputHandler(name, value)

    }
    return (

        <>
            <div>

                <div className="page-body-wrapper">
                    <div className="content-wrapper ">
                        <section className="reset-password">
                            <div className="container">
                                <div className="section-title">
                                    Personal Details
                                </div>
                                <div className="reset-password-box">
                                    <div className="form-feildset">
                                        <input type="text" name="firstName" value={textValue.firstName}
                                              placeholder="Firstname" onChange={(e) => handleInput(e)}/>
                                    </div>
                                    <div className="form-feildset">
                                        <input type="text" name="lastName" value={textValue.lastName}
                                               placeholder="LastName" onChange={(e) => handleInput(e)}/>
                                    </div>
                                    <div className="form-feildset">
                                        <button onClick={nextStep}>Next</button>
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
export default PersonalDetails