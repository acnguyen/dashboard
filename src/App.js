import React from 'react';
import './App.css';
import SystemComponent from './Components/SystemComponent';
import JobComponent from './Components/JobComponent';
import PieChartComponent from './Components/PieChartComponent';
import LineGraphComponent from './Components/LineGraphComponent';
import TestComponent from "./Components/TestComponent";


function App() {
        const job = {
        suiteName: "Suite Name",
        environment: "Environment",
        jobName: "Job Name",
        date: "Date",
        totalDuration: "Total Duration",
        totalTests: "Total JobComponent",
        passedTests: "Passed JobComponent",
        failedTests: "Failed JobComponent",
        percentPassed: "Percent Passed"
    };

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
                <JobComponent job={job}/>
                <TestComponent test={test}/>
            </div>
        </div>
        )
}

export default App;
