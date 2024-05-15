import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Teacherlist.css";
import socketIOClient from 'socket.io-client';

const Teacherlist = () => {
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/cases/all');
            setLawyers(response.data.cases);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    return (
        <div className='teacher--list'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Case</th>
                        <th>Duration</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {lawyers.map((lawyer, index) => (
                        <tr key={index}>
                            <td>{lawyer.lawyer}</td>
                            <td>{lawyer.case}</td>
                            <td>{lawyer.duration}</td>
                            <td>${lawyer.cost}/hr</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Teacherlist;
