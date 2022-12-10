import React from "react";
import './ApplicationsTable.scss'
import RowTable from "../rowTable/RowTable";
const ApplicationsTable = (props) => {
    let table = props.data.map(
        obj => <RowTable name = {obj.name} date = {obj.date} topic = {obj.topic} />);
    return (
        <div className = 'header-name'>
            <table>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Дата</th>
                <th>Тема заявки</th>
            </tr>
            </thead>
            {table}
            </table>
        </div>
    );
};

export default ApplicationsTable;
