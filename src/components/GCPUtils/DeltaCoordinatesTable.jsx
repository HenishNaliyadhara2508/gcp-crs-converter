import React from 'react';
import { Table } from 'antd';

const DeltaCoordinatesTable = ({ data }) => {
    const columns = [
        {
            align: 'center',
            dataIndex: 'no',
            key: 'no',
            render: (_, __, index) => index + 1,
            title: 'No',
            width: 50,
        },
        {
            dataIndex: 'x',
            key: 'x',
            title: 'ΔX',
        },
        {
            dataIndex: 'y',
            key: 'y',
            title: 'ΔY',
        },
        {
            dataIndex: 'z',
            key: 'z',
            title: 'ΔZ',
        },
    ];

    return (
        <div className="w-full">
            <Table
                size="small"
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={false}
                scroll={{ x: 'max-content', y: 200 }}
                className="text-theme-font custom-ant-table co-ord-table"
                locale={{
                    emptyText: (
                        <div className="flex items-center justify-center text-lg text-theme-font inter-700">
                            No Points Found
                        </div>
                    ),
                }}
            />
        </div>
    );
};

export default DeltaCoordinatesTable;
