import WorkExperience from './component/WorkExperience'
import EducationDetails from './component/EducationDetails'
import PersonalDetails from './component/PersonalDetails'
import Details from './component/Details'
import {useState} from "react";
import { Stepper, Step } from 'react-form-stepper';

export default function App() {
    let [state, setState] = useState(0)
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        highschool: '',
        intemediate: '',
        designation: '',
        companyName: ''

    })

    const next = () => {
        setState(state + 1)
    }
    const prev = () => {
        setState(state - 1)
    }
    const inputHandler = (name, val) => {
        setValue((prev) => {
            return {
                ...prev,
                [name]: val

            }
        })

    }
    return (
        <>
            <Stepper activeStep={state}>
                <Step  label="Personal Details" />
                <Step  label="EducationDetails" />
                <Step  label="WorkExperience" />
                <Step  label="All Details" />
            </Stepper>
            {
                state === 0 ? <PersonalDetails next={next} prev={prev} inputHandler={inputHandler} textValue={value}/>
                    : state === 1 ?
                    <EducationDetails next={next} prev={prev} inputHandler={inputHandler} textValue={value}/>
                    : state === 2 ?
                        <WorkExperience next={next} prev={prev} inputHandler={inputHandler} textValue={value}/>
                        : state === 3 ? <Details prev={prev} textValue={value}/> : ''

            }

        </>
    )


}
