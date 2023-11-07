import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button } from '@mui/material'
import React from 'react'
import {  getUserData,deleteUser } from '../Services/api'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`;

const Thead = styled(TableRow)`
background:#000;
& > th {
  color: #fff;
  font-size:20px;
}
`;

const TBody = styled(TableRow)`
& > td {
  font-size:20px;
}
`

const AllUsers = () => {

  const [users,setUser] = useState([])

  useEffect(() =>{
    getUserDetails();
  },[])

  const getUserDetails = async() =>{
    let response = await getUserData();
    setUser(response.data);
  }

  const deleteUserData  = async(id) =>{
    await deleteUser(id);
    getUserDetails(); 
  }
  return (
    <div>
      <StyledTable>
        <TableHead>
           <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>PhoneNo</TableCell>
            <TableCell></TableCell>
           </Thead>
        </TableHead>
        <TableBody>
          {
            users.map(user =>(
              <TBody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.PhoneNo}</TableCell>
                <TableCell>
                  <Button variant='contained'style={{marginRight: 10}} component={Link} to ={`/edit/${user.id}`}>Edit</Button>
                  <Button variant='contained' color='secondary' onClick={() =>deleteUserData(user.id)}>Delete</Button>
                </TableCell>
              </TBody>
            ))
          }
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUsers 
 