import React from 'react';
import '../App.css';
import Table from 'rc-table';
import styled from 'styled-components';
import 'rc-table/assets/index.css'

function JobComponent(props) {
    console.log(props);

    const columns = [{
        title: 'Name', dataIndex: 'name', key:'name', width: 100,
    }, {
        title: 'Height', dataIndex: 'Height', key:'Height', width: 100,
    }, {
        title: 'Mass', dataIndex: 'Mass', key:'Mass', width: 200,
    }, {
        title: 'Hair_color', dataIndex: 'Hair_color', key:'Hair_color',
    }];

    const data = [
        { name: props.character.name, age: 28, address: 'some where', key:'1' },

    ];

    const BodyRow = styled.tr`
  &:hover {
    background: lightblue !important;
  }
`;

    const components = {
        body: {
            row: BodyRow,
        },
    };

    return (
        <div>
            <p>{props.character.name}</p>
            <Table columns={columns} data={data} components={components} />
        </div>
    );
}
export default JobComponent;