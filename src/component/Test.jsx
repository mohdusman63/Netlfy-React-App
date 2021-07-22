import React from 'react';
// import './style.css'

const Test = () => {
    return (
        <div>
            <div className="page-body-wrapper">
                <div className="content-wrapper ">
                    <section className="reset-password">
                        <div className="container">
                            <div className="section-title">
                                Educational Details
                            </div>
                            <div className="reset-password-box">
                                <div className="form-feildset">
                                    <input type="text" value={textValue.companyName} name="companyName"
                                           onChange={(e) => handleInput(e)}/></div>
                                <div className="form-feildset">
                                    <input type="text" name="designation" value={textValue.designation}
                                           onChange={(e) => handleInput(e)}/>
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
    );
};

export default Test;