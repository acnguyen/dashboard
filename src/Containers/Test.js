import React from 'react';
import TestComponent from "../Components/TestComponent";

class Test extends React.Component {
    render() {
        const test = {
            class: "Class",
            method: "Method",
            result: "Result",
            error: "Error",
            screenShot: "ScreenShot",
            date: "Date",
        };

        return (
            <TestComponent test={test}/>
        )
    }
}
export default Test;