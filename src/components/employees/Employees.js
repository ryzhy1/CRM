import EmpData from "./EmpData";


const Employees = () => {
    const elements = EmpData.map((item) => {
        const {name, src, post} = item;

        return (
            <div className="employee">
                <img src={src} alt="employee"/>
                <div className="employee__name">{name}</div>
                <div className="employee__post">{post}</div>
            </div>
        )
    })


    return (
        <section className="employees">
            {elements}
        </section>
    );
}

export default Employees;