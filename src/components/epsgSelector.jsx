import { useEffect, useState } from 'react';
import { Select, Card, Typography } from 'antd';
import { getAllCRSByType } from '../helpers/epsgHelper';

const { Option } = Select;
const { Text } = Typography;

export const EPSGSelector = ({ onCRSChange }) => {
    const [selectedHorizontalCRS, setSelectedHorizontalCRS] = useState('4326');
    const [selectedVerticalCRS, setSelectedVerticalCRS] = useState(null);
    const [horizontal, setHorizontal] = useState([]);
    const [vertical, setVertical] = useState([]);

    useEffect(() => {
        const { horizontalList, verticalList } = getAllCRSByType();
        setHorizontal(horizontalList);
        setVertical(verticalList);

        // Set first values as selected
        if (horizontalList.length > 0) {
            setSelectedHorizontalCRS(horizontalList[0].code);
            if (onCRSChange)
                onCRSChange({
                    horizontal: selectedHorizontalCRS,
                    vertical: verticalList[0]?.code,
                });
        }

        if (verticalList.length > 0) {
            setSelectedVerticalCRS(verticalList[0].code);
        }
    }, []);

    const handleHorizontalCRSChange = (value) => {
        setSelectedHorizontalCRS(value);
        if (onCRSChange)
            onCRSChange({ horizontal: value, vertical: selectedVerticalCRS });
    };

    const handleVerticalCRSChange = (value) => {
        setSelectedVerticalCRS(value);
        if (onCRSChange)
            onCRSChange({ horizontal: selectedHorizontalCRS, vertical: value });
    };

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
                    placeholder="Select Horizontal CRS"
                    value={selectedHorizontalCRS}
                    onChange={handleHorizontalCRSChange}
                    optionFilterProp="children"
                    style={{ width: '100%', marginTop: 4 }}
                    filterOption={(input, option) =>
                        String(option.children)
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }>
                    {horizontal.map((crs) => (
                        <Option key={crs.code} value={crs.code}>
                            {crs.name} (EPSG:{crs.code})
                        </Option>
                    ))}
                </Select>
            </div>

            <div>
                <Text strong style={{ color: '#52c41a' }}>
                    Select Vertical CRS
                </Text>
                <Select
                    showSearch
                    placeholder="Select Vertical CRS"
                    value={selectedVerticalCRS}
                    onChange={handleVerticalCRSChange}
                    optionFilterProp="children"
                    style={{ width: '100%', marginTop: 4 }}
                    filterOption={(input, option) =>
                        String(option.children)
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }>
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
