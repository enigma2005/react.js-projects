import React, { useState } from 'react'

function App() {
    const [launches, Setlaunches] = useState([]);

    const url = () =>
        "https://api.spacexdata.com/v4/launches/upcoming"

    const fetchData = async() => {
        const data = await (await fetch(url())).json();
        Setlaunches(data.map((launch) => {
            return {
                name: launch.name,
                number: launch.flight_number,
                date: launch.date_local.slice(0, 10),
                time: launch.date_local.slice(11),
                details: launch.details,
            };
        }));
    };

    return (         
        <div className = "App">
        <h3> Click to get the Upcoming launches for spaceX </h3>
        <button onClick={fetchData}>Upcoming launches</button >
        <ul> {
            launches.map((launch) =>
                <ul>
                
                <li> Project number: { launch.number } </li> 
                <li> Project Name: { launch.name } </li> 
                <li> Date: { launch.date } </li> 
                <li> Time: { launch.time } </li> 
                <li> Details: { launch.details } </li> 
                <li> -- -- -- -- -- -- -- </li> 
                </ul>
            )
        } 
        </ul> 
        </div>
    );
}


export default App;
