import {Link} from "react-router-dom"

import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="nav__wrapper">
                <div className="nav__user">
                    <div className="nav__name">NastyaNOGAY</div>
                    <div className="nav__post">Администратор</div>
                </div>
                <div className="nav__list">
                    <ul>
                        
                        <Link to="/requests">
                            <li>Заявки</li>
                        </Link>
                        <li>Календарь</li>
                        <li>Группы</li>
                        <Link to="/clients">
                            <li>Клиенты</li>
                        </Link>
                        <li>Расписание</li>
                        <li>Статистика</li>
                        <Link to="/employees">
                            <li>Сотрудники</li>
                        </Link>
                        <li>Настройки</li>
                        <Link to="/">
                            <li>Выйти</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar