import { Table } from 'antd';

const DeltaCoordinatesTable = ({ data }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'ΔX (Delta X)',
            dataIndex: 'dx',
            key: 'dx',
        },
        {
            title: 'ΔY (Delta Y)',
            dataIndex: 'dy',
            key: 'dy',
        },
        {
            title: 'ΔZ (Delta Z)',
            dataIndex: 'dz',
            key: 'dz',
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={false} // Optional: disable pagination if you don't need it
            bordered
        />
    );
};

export default DeltaCoordinatesTable;
