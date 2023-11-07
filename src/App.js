import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CrudApp from './components/CrudApp';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';

//TO ENABLE ROUTER IN REACT APP FIRST
/*NPM INSTALL REACT-ROUTER-DOM

THEN we can enable router here by importing browserRouter

AND ROUTES---> IS USED IN THIS ALSO TO TOGGLE BETEEN OUR COMPONENTS .
AND ROUTE---> IS USED TO GIVE THE PATH NAME TO ON WHICH COMPONENT WE WANT TO GO. 
*/
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element = {<CrudApp/>} />
      <Route path='/all' element = {<AllUsers/>} />
      <Route path='/add' element = {<AddUsers/>} />
      <Route path= '/edit/:id' element ={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
