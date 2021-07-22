const Details=({prev,textValue})=>{
  console.log(textValue)

  const previous=()=>{
    prev()

  }
  return(
    <>
    <h1>UserDetails</h1>
     <table border="1" cellPadding="10" cellSpacing="0">
       <thead>
       <th>FirstName</th>
       <th>LastName</th>
       <th>HighSchool</th>
       <th>InterMediate</th>
       <th>Companyname</th>
       <th>Designation</th>
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

       </table>
       <button onClick={previous}>Pre</button>

    </>


  )
}
export default Details