import './clients.scss'

const Clients = ({data}) => {
    const elements = data.map((item) => {
        const {name} = item;
        return (
            <h1>{name}</h1>
        )
    })

    return (
        <section className="clients">
            <div className="clients__fields">
                <div className="clients__field">
                    <label>ФИО Ученика</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
                <div className="clients__field">
                    <label>Телефон</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
                <div className="clients__field">
                    <label>Почта</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
                <div className="clients__field">
                    <label>Номер договора</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
                <div className="clients__field">
                    <label>Филиал</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
                <div className="clients__field">
                    <label>Статус ученика</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
                <div className="clients__field">
                    <label>Отв. менеджер</label>
                    <input type="text" placeholder="Тыкать тут"></input>
                </div>
            </div>
            <div className="clients__options">
                <button className="clients__option">Добавить клиента</button>
                <button className="clients__option">Импортировать клиента</button>
                <button className="clients__option">Экспортировать клиента</button>
                <button className="clients__option">Удалить клиента</button>
            </div>
        </section>
    )
}

export default Clients