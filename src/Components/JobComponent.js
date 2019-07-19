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
        title: 'Height', dataIndex: 'height', key:'height', width: 100,
    }, {
        title: 'Mass', dataIndex: 'mass', key:'mass', width: 200,
    }, {
        title: 'Hair_color', dataIndex: 'hair_color', key:'hair_color',
    }];

    const data = [
        { name: props.character.name, height: props.character.height, address: 'some where', key:'1' },

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
            <Table columns={columns} data={data} components={components} />
        </div>
    );
}
export default JobComponent;