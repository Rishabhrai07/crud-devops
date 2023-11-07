import { FormControl, FormGroup, Input, InputLabel, Typography,Button,styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import { addUsers } from '../Services/api'
const Container = styled(FormGroup)
`width:50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px;
}
`
const initialValues = {
    name:'',
    userName:'',
    Email:'',
    PhoneNo:''

}
const AddUsers =() => {
    const[user,setUser] = useState(initialValues);
    const navigate = useNavigate();

    const onValueChange = (e) =>{
      setUser({...user,[e.target.name]:e.target.value});
      console.log(user);

    }
    const addUsersDetails = async() =>{
        await addUsers(user);
        navigate('/all');
    }
  return (
          <Container>
        <Typography variant='h4'>ADD USER</Typography>

        {/* REPLACE FORMGROUP ITH CONTAINER HICH AS MADE ABOVE TO GIVE STYLE TO FORMGROUP */}
     {/* <FormGroup> */}
        <FormControl>
            <InputLabel>Name</InputLabel>
            {/* HERE ALL THE INPUT VALUES ARE CALLED BY SAME FUNCTION SO TO DIFFERENCIATE THEM  FROM WHICH FUNCTION FIELD CALLED SO I USED NAME FIELD-->THIS NAME FIELD IS USED TO DIFFERENCIATE B/ SAME FUNCTION FIELD*/}
            <Input onChange={(e) =>onValueChange(e)} name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input  onChange={(e) =>onValueChange(e)}name="userName"/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e) =>onValueChange(e)}name="Email"/>
        </FormControl>
        <FormControl>
            <InputLabel>PhoneNo-</InputLabel>
            <Input  onChange={(e) =>onValueChange(e)}name="PhoneNo"/>
        </FormControl>
        <FormControl>
            <Button onClick={() =>{addUsersDetails()}} variant='contained'>Add User</Button>
        </FormControl>
     {/* </FormGroup> */}
     </Container>
  )
}

export default AddUsers
