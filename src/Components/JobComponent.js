import React from 'react';
import '../App.css';

function JobComponent(props) {
    console.log(props);

    return (
        <div>
            <h2 className={"header"}>Jobs</h2>
            <table >
                <tr>
                    <th>{props.job.suiteName}</th>
                    <th>{props.job.environment}</th>
                    <th>{props.job.jobName}</th>
                    <th>{props.job.date}</th>
                    <th>{props.job.totalDuration}</th>
                    <th>{props.job.totalTests}</th>
                    <th>{props.job.passedTests}</th>
                    <th>{props.job.failedTests}</th>
                    <th>{props.job.percentPassed}</th>
                </tr>
                <tr>
                    <td>Smoke</td>
                    <td>int05</td>
                </tr>
            </table>
        </div>
    );
}
export default JobComponent;