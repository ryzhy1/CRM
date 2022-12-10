import {Link} from "react-router-dom"

import './login.scss'

const Login = () => {
    return (
        <section className="login">
            <div className="login__wrapper">
                <div className="login__form">
                    <h2 className="login__title">Добро пожаловать!</h2>
                    <form action="">
                        <div className="login__fields">
                            <p className="">Логин</p>
                            <input type="text" placeholder="" className="login__input"/>
                            <p>Пароль</p>
                            <input type="password" placeholder="" className="login__input"/> 
                            </div> 
                    </form>
                    <Link to="/requests">
                        <button className="login__button">Войти</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Login