import React from 'react';

function SystemComponent(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.system.systemName}</h2>
        </div>
    );
}
export default SystemComponent;