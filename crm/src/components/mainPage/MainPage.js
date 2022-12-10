import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import GreyRectangle from "../grey_rectangle/GreyRectangle";
import ApplicationsTable from "../application_table/ApplicationsTable";

const MainPage = (props) => {

    const data = [
        {name: 'Иванов Иван', date: '01.01.2023', topic: 'Расписание фигня'},
        {name: 'Петров Петр', date: '02.01.2023', topic: 'Колобок повесился'},
        {name: 'Сидоров Сидр', date: '03.01.2023', topic: 'а как какать?'},
        {name: 'Иванов Иван', date: '04.01.2023', topic: 'Тема заявки'},
    ]

    return (
        <body>
            <Header name={'Заявки'}/>
            <Navbar/>
            <GreyRectangle children={<ApplicationsTable data={data}/>} pageName={'Входящие заявки'}/>
        </body>
    )
}
export default MainPage