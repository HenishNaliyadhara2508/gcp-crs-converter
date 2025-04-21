import { Button } from 'antd';
import DeltaCoordinatesTable from './DeltaCoordinatesTable.jsx';

const TransformCoordinates = ({
    transformedData,
    transformationParams,
    onApply,
}) => {
    return (
        <div className="p-4 border rounded mt-4 bg-gray-50">
            <h3 className="font-medium text-lg">Transformation Preview</h3>

            {/* Transformation parameters */}
            <div className="mt-2 text-sm space-y-1">
                <p>
                    <strong>Scale:</strong> {transformationParams.scale}
                </p>
                <p>
                    <strong>Translation X:</strong>{' '}
                    {transformationParams.translation[0]}
                </p>
                <p>
                    <strong>Translation Y:</strong>{' '}
                    {transformationParams.translation[1]}
                </p>
                <p>
                    <strong>Translation Z:</strong>{' '}
                    {transformationParams.translation[2]}
                </p>
            </div>

            <div className="mt-4">
                <DeltaCoordinatesTable data={transformedData} />
            </div>

            {/* Apply Button */}
            <div className="mt-4">
                <Button type="primary" onClick={onApply}>
                    Apply Transformation
                </Button>
            </div>
        </div>
    );
};

export default TransformCoordinates;
