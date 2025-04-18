import { useEffect, useState } from 'react';
import { Select, Card, Typography, Divider } from 'antd';
import { getAllCRSByType } from '../helpers/epsgHelper';

const { Option } = Select;
const { Title, Text } = Typography;

export const EPSGSelector = ({
    sourceEPSG,
    setSourceEPSG,
    targetEPSG,
    setTargetEPSG,
}) => {
    const [horizontal, setHorizontal] = useState([]);
    const [vertical, setVertical] = useState([]);

    useEffect(() => {
        const { horizontalList, verticalList } = getAllCRSByType();
        setHorizontal(horizontalList);
        setVertical(verticalList);
    }, []);

    return (
        <Card
            title={
                <span style={{ color: '#1890ff' }}>
                    Coordinate Reference Systems
                </span>
            }
            bordered
            className="w-[300px]"
            style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #52c41a',
            }}>
            <div style={{ marginBottom: 16 }}>
                <Text strong style={{ color: '#52c41a' }}>
                    Select Horizontal CRS
                </Text>
                <Select
                    showSearch
                    placeholder="Select HCRS"
                    optionFilterProp="children"
                    value={sourceEPSG}
                    onChange={(value) => setSourceEPSG(value)}
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }
                    style={{ width: '100%', marginTop: 4 }}>
                    {horizontal.map((crs) => (
                        <Option key={crs.code} value={crs.code}>
                            {crs.name} (EPSG:{crs.code})
                        </Option>
                    ))}
                </Select>
            </div>

            <div style={{ marginBottom: 16 }}>
                <Text strong style={{ color: '#52c41a' }}>
                    Select Vertical CRS
                </Text>
                <Select
                    showSearch
                    placeholder="Select VCRS"
                    optionFilterProp="children"
                    value={targetEPSG}
                    onChange={(value) => setTargetEPSG(value)}
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }
                    style={{ width: '100%', marginTop: 4 }}>
                    {vertical.map((crs) => (
                        <Option key={crs.code} value={crs.code}>
                            {crs.name} (EPSG:{crs.code})
                        </Option>
                    ))}
                </Select>
            </div>
        </Card>
    );
};
