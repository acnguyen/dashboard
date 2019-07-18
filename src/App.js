import React from 'react';
import './App.css';
import PieChart from './Containers/PieChart';
import LineGraph from './Containers/LineGraph';
import Test from "./Containers/Test";
import Job from "./Containers/Job"
import System from "./Containers/System";


function App() {

        return (
        <div>
            <div className={"appContainer"}>
                <h1 className={"header"}>Header</h1>
                <System />
                <div className={"chartContainer"}>
                    <PieChart />
                    <LineGraph />
                </div>
            </div>
            <div className={"tableContainer"}>
                <Job />
                <Test />
            </div>
        </div>
        )
}

export default App;
