import React, { useState, useEffect } from "react";
import './indexAdmin.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexAdmin = props => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('/admins')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error en la respuesta del servidor');
                }
            })
            .then(data => setTableData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Nombre/s:</th>
                        <th>Apellido/s:</th>
                        <th>Nombre de usuario:</th>
                        <th>telefono:</th>
                        <th>email:</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.surname}</td>
                            <td>{row.username}</td>
                            <td>{row.telephone}</td>
                            <td>{row.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IndexAdmin;
