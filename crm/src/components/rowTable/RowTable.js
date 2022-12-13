import React from "react";
import './RowTable.scss'
const RowTable = ({name, date, topic}) => {
    return (
            <tbody>
            <tr>
                <th>{name}</th>
                <th>{date}</th>
                <th>{topic}</th>
            </tr>
            </tbody>

    );
};

export default RowTable;
