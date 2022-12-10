import MainPage from '../mainPage/MainPage';
import Login from '../login/Login';
import Employees from '../employees/Employees';
import ApplicationsTable from '../application_table/ApplicationsTable';
import Data from './Data';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


function App() {

    return (

    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/requests' element={<MainPage children={<ApplicationsTable data={Data}/>}/>}/>
            <Route path='/employees' element={<Employees/>}/>
        </Routes>
    </Router> )
}

export default App;