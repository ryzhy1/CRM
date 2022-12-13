import MainPage from '../mainPage/MainPage';
import Login from '../login/Login';
import Employees from '../employees/Employees';
import ApplicationsTable from '../application_table/ApplicationsTable';
import EmpData from '../employees/EmpData';
import Data from './Data';
import Clients from '../clients/Clients';

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
            <Route path='/requests' element={<MainPage children={<ApplicationsTable data={Data} pageName={'Входящие заявки'}/>} pageName={'Заявки'}/>}/>
            <Route path='/employees' element={<MainPage children={<Employees empData={EmpData}/>} pageName={'Сотрудники'}/>}/>
            <Route path='/clients' element={<MainPage children={<Clients data={Data}/>} pageName={'Клиенты'}/>}/>
        </Routes>
    </Router> )
}

export default App;