import React from 'react';
import JobComponent from '../Components/JobComponent';

class Job extends React.Component {
    render() {
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

        return (
            <JobComponent job={job}/>
        )
    }
}
export default Job;