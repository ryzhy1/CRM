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
                        <li>Заявки</li>
                        <li>Календарь</li>
                        <li>Группы</li>
                        <li>Клиенты</li>
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