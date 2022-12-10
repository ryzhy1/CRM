import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import GreyRectangle from "../grey_rectangle/GreyRectangle";
import ApplicationsTable from "../application_table/ApplicationsTable";

const MainPage = (props) => {

    return (
        <body>
            <Header name={'Заявки'}/>
            <Navbar/>
            <GreyRectangle children={<ApplicationsTable data={data}/>} pageName={'Входящие заявки'}/>
        </body>
    )
}
export default MainPage