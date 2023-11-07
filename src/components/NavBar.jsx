import { AppBar, Toolbar, Typography,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
 
const Header = styled(AppBar)
`background: #111111`;
// const Tab = styled(Typography) HERE REPLACE TYPOGRAPHY With NAVELINK TO ADD LINK TO GO TO THAT PAGE
// `font-size:20px;
// margin-right:20px;
const Tab = styled(NavLink)
`font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`
const NavBar = () => {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tab to = "/">CRUD Application</Tab>
          <Tab to = "/add">Add Users</Tab>
          <Tab to = "/all">All Users</Tab>
        </Toolbar>
      </Header>

    </div>
  )
}

export default NavBar
