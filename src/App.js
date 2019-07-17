import React from 'react';
import './App.css';
import SystemComponent from './Components/SystemComponent';
import PieChartComponent from './Components/PieChartComponent';
import LineGraphComponent from './Components/LineGraphComponent';
import TestComponent from "./Components/TestComponent";
import Job from "./Containers/Job"


function App() {


    const test = {
        class: "Class",
        method: "Method",
        result: "Result",
        error: "Error",
        screenShot: "ScreenShot",
        date: "Date",
    };

        return (
        <div>
            <div className={"appContainer"}>
                <h1 className={"header"}>Header</h1>
                <SystemComponent system={{systemName: "SystemComponent Name"}}/>
                <div className={"chartContainer"}>
                    <PieChartComponent/>
                    <LineGraphComponent/>
                </div>
            </div>
            <div className={"tableContainer"}>
                <Job />
                <TestComponent test={test}/>
            </div>
        </div>
        )
}

export default App;
