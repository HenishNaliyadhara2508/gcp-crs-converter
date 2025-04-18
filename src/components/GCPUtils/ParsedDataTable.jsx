import React from 'react';
import { Table, Checkbox } from 'antd';

const ParsedDataTable = ({ data, setSelectedData }) => {
    const handleSelectionChange = (selectedRowKeys) => {
        const selectedPoints = data.filter((point) =>
            selectedRowKeys.includes(point.id),
        );
        setSelectedData(selectedPoints);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'X',
            dataIndex: 'x',
            key: 'x',
        },
        {
            title: 'Y',
            dataIndex: 'y',
            key: 'y',
        },
        {
            title: 'Z',
            dataIndex: 'z',
            key: 'z',
        },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={data}
            rowSelection={{
                type: 'checkbox',
                onChange: handleSelectionChange,
            }}
            pagination={false}
        />
    );
};

export default ParsedDataTable;
