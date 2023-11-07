// import { FormControl, FormGroup, Input, InputLabel, Typography,Button,styled } from '@mui/material'
// import React from 'react'
// import { useState,useEffect } from 'react'
// import {useNavigate, useParams} from 'react-router-dom';

// import { editUser } from '../Services/api'
// import { getUser } from '../Services/api';
// const Container = styled(FormGroup)
// `width:50%;
// margin:5% auto 0 auto;
// & > div{
//     margin-top:20px;
// }
// `
// const initialValues = {
//     name:'',
//     userName:'',
//     Email:'',
//     PhoneNo:''

// }
// const EditUser = () => {
//     const[user,setUser] = useState(initialValues);
//     const navigate = useNavigate();
//     const {id} = useParams;
     

//     useEffect(()=>{
//            getUsersData();
//     },[])

//     const getUsersData = async() => {
//         let response = await getUser(id);
//         setUser(response.data);
//     }


//     const onValueChange = (e) => {
//         setUser({...user,[e.target.name]:e.target.value});
//         console.log(user);
  
//       }
      
//     const addUsersDetails = async() => {
//         await editUser(user, id);
//         navigate('/all');
//     } 

//   return (
//           <Container>
//         <Typography variant='h4'>Edit User</Typography>

//         {/* REPLACE FORMGROUP ITH CONTAINER HICH AS MADE ABOVE TO GIVE STYLE TO FORMGROUP */}
//      {/* <FormGroup> */}
//         <FormControl>
//             <InputLabel>Name</InputLabel>
//             {/* HERE ALL THE INPUT VALUES ARE CALLED BY SAME FUNCTION SO TO DIFFERENCIATE THEM  FROM WHICH FUNCTION FIELD CALLED SO I USED NAME FIELD-->THIS NAME FIELD IS USED TO DIFFERENCIATE B/ SAME FUNCTION FIELD*/}
//             <Input onChange={(e) =>onValueChange(e)} name="name" value={user.name}/>
//         </FormControl>
//         <FormControl>
//             <InputLabel>UserName</InputLabel>
//             <Input  onChange={(e) =>onValueChange(e)}name="userName" value={user.userName}/>
//         </FormControl>
//         <FormControl>
//             <InputLabel>Email</InputLabel>
//             <Input  onChange={(e) =>onValueChange(e)}name="Email" value={user.Email}/>
//         </FormControl>
//         <FormControl>
//             <InputLabel>PhoneNo-</InputLabel>
//             <Input  onChange={(e) =>onValueChange(e)}name="PhoneNo" value={user.PhoneNo}/>
//         </FormControl>
//         <FormControl>
//             <Button onClick={() =>{addUsersDetails()}} variant='contained'>Edit User</Button>
//         </FormControl>
//      {/* </FormGroup> */}
//      </Container>
//   )
// }

// export default EditUser


import { useState, useEffect} from "react";
import { FormGroup,FormControl,InputLabel,Input, Typography,Button,styled} from "@mui/material";
import { getUser,editUser } from "../Services/api";
import { useNavigate,useParams } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
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
 


const EditUser = () => {
    const[user,setUser]=useState(initialValues);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        getUserData();
    },[])
    const getUserData =async()=>{
        let response = await getUser(id)
         setUser(response.data)
    }
    const onValueChange = (e) => {
        console.log(e.target.name,e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    const AddUserDetail = async() => {
       await editUser(user,id);
       navigate("/all")
    }
    return (
         <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="userName" value={user.userName}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="Email" value={user.Email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="PhoneNo" value={user.PhoneNo}/>
            </FormControl>
            <FormControl>
                <Button onClick={()=> AddUserDetail()} variant="contained">Edit User</Button>
            </FormControl>
         </Container>   
    )
}
export default EditUser;
