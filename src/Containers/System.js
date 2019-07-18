import React from 'react';
import SystemComponent from "../Components/SystemComponent";

class System extends React.Component {

    render() {
        return (
            <SystemComponent system={{systemName: "SystemComponent Name"}}/>
        )
    }
}
export default System;