import React from "react";
import Table from 'react-bootstrap/Table'

const Details = ({prev, textValue}) => {
    const previous = () => {
        prev()

    }
    return (
        <>

       <div className="col-md-5 m-auto">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>HighSchool</th>
                    <th>InterMediate</th>
                    <th>Companyname</th>
                    <th>Designation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{textValue.firstName} </td>
                    <td>{textValue.lastName} </td>
                    <td>{textValue.highschool} </td>
                    <td>{textValue.intemediate} </td>
                    <td>{textValue.companyName} </td>
                    <td>{textValue.designation} </td>
                </tr>
                </tbody>
            </Table>
            <div className="form-feildset">
                <button onClick={previous}>Pre</button>
            </div>
       </div>


        </>


    )
}
export default Details