import { useState, useEffect } from 'react';
import { Table } from 'antd';

const ParsedDataTable = ({
    data,
    setSelectedData,
    potreeViewRef,
    gcpMarkerMappings,
    setGcpMarkerMappings,
}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [mappedGCPIds, setMappedGCPIds] = useState([]);

    useEffect(() => {
        // console.log('Current GCP to Marker Mappings:', gcpMarkerMappings);
    }, [gcpMarkerMappings]);

    const handleGCPSelection = async (gcp) => {
        if (mappedGCPIds.includes(gcp.id)) return;

        setSelectedData([gcp]);

        if (!potreeViewRef.current?.placeMarkerForGCP) {
            console.error(
                'PotreeView is not available or does not support marker placement',
            );
            return;
        }

        try {
            const { position } =
                await potreeViewRef.current.placeMarkerForGCP(gcp);

            setGcpMarkerMappings((prevMappings) => ({
                ...prevMappings,
                [gcp.id]: {
                    id: gcp.id,
                    source: { ...position },
                    target: { x: gcp.x, y: gcp.y, z: gcp.z },
                },
            }));

            setMappedGCPIds((prev) => [...prev, gcp.id]);
        } catch (err) {
            console.error('Error placing marker:', err);
        }
    };

    const handleSelectionChange = (selectedKeys) => {
        setSelectedRowKeys(selectedKeys);

        selectedKeys.forEach((rowId) => {
            const selectedGCP = data.find((point) => point.id === rowId);
            if (selectedGCP) {
                handleGCPSelection(selectedGCP);
            }
        });
    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'X', dataIndex: 'x', key: 'x' },
        { title: 'Y', dataIndex: 'y', key: 'y' },
        { title: 'Z', dataIndex: 'z', key: 'z' },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={data}
            rowSelection={{
                type: 'checkbox',
                selectedRowKeys,
                onChange: handleSelectionChange,
                getCheckboxProps: (record) => ({
                    disabled: mappedGCPIds.includes(record.id),
                }),
            }}
            pagination={false}
        />
    );
};

export default ParsedDataTable;
