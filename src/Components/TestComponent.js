import React from 'react';
import '../App.css';

function TestComponent(props) {
    console.log(props);

    return (
        <div>
            <h2>Tests</h2>
            <table >
                <tr>
                    <th>{props.test.class}</th>
                    <th>{props.test.method}</th>
                    <th>{props.test.result}</th>
                    <th>{props.test.error}</th>
                    <th>{props.test.screenshot}</th>
                    <th>{props.test.date}</th>
                </tr>
                <tr>
                    <td>Smoke</td>
                    <td>smokeTest1</td>
                </tr>
            </table>
        </div>
    );
}
export default TestComponent;