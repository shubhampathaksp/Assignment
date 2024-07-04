import React, { useEffect, useState } from "react";
const Main = () => {
    const [data, steData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => steData(data));
    }, []);
    return (
        <>
            <main className="main">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Start_date</th>
                            <th>Office</th>
                            <th>Extn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                                <td>{item.salary}</td>
                                <td>{item.start_date}</td>
                                <td>{item.office}</td>
                                <td>{item.extn}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
};
export default Main;