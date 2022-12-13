import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import GreyRectangle from "../grey_rectangle/GreyRectangle";

const MainPage = ({children, pageName}) => {

    return (
        <body>
            <Header name={pageName}/>
            <Navbar/>
            <GreyRectangle children={children}/>
        </body>
    )
}
export default MainPage