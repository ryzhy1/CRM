import './header.scss'

const Header = (props) => {
    return (
        <header>
            <p  className="page__name">{props.name}</p>
            <input type="search" placeholder="Поиск"/>
        </header>
    )
}

export default Header