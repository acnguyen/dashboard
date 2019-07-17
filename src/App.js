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
        class: "class",
        method: "method",
        result: "result",
        error: "error",
        screenShot: "screenShot",
        date: "date",
    };

        return (
        <div className={"container"}>
            <h1>Header</h1>
            <SystemComponent system={{systemName: "SystemComponent Name"}}/>
            <PieChartComponent/>
            <LineGraphComponent/>
            <JobComponent job={job}/>
            <TestComponent test={test}/>
        </div>
        )
}

export default App;
