import MainPage from '../mainPage/MainPage';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


function App() {

    return (

    <Router>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<MainPage/>}/>
        </Routes>
    </Router> )
}

export default App;