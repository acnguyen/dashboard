import React from 'react';
import logo from './logo.svg';
import './App.css';
import System from './System';
import Tests from './Tests';
import PieChart from './PieChart';
import LineGraph from './LineGraph';


function App() {
        const job = {
        suiteName: "Suite Name",
        environment: "Environment",
        jobName: "Job Name",
        date: "Date",
        totalDuration: "Total Duration",
        totalTests: "Total Tests",
        passedTests: "Passed Tests",
        failedTests: "Failed Tests",
        percentPassed: "Percent Passed"
    };

        return (
        <div className={"container"}>
            <h1>Header</h1>
            <System system={{systemName: "System Name"}}/>
            <PieChart/>
            <LineGraph/>
            <Tests job={job}/>
        </div>
        )
}

export default App;
