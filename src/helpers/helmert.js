const computeCentroid = (points) => {
    const sum = points.reduce(
        (acc, p) => {
            acc[0] += p[0];
            acc[1] += p[1];
            acc[2] += p[2];
            return acc;
        },
        [0, 0, 0],
    );
    return sum.map((v) => v / points.length);
};

const identityMatrix = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

const subtract = (a, b) => a.map((v, i) => v - b[i]);

const computeRotationMatrix = (sourceCentered, targetCentered) => {
    const n = sourceCentered.length;

    let H = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                H[j][k] += sourceCentered[i][j] * targetCentered[i][k];
            }
        }
    }

    const { U, V } = computeSVD(H);
    const rotationMatrix = multiplyMatrices(V, transposeMatrix(U));

    return rotationMatrix;
};

const computeSVD = (matrix) => {
    return { U: identityMatrix, V: identityMatrix };
};

const multiplyMatrices = (A, B) => {
    const rowsA = A.length;
    const colsA = A[0].length;
    const colsB = B[0].length;

    let result = Array(rowsA)
        .fill()
        .map(() => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
};

const transposeMatrix = (matrix) => {
    return matrix[0].map((_, i) => matrix.map((row) => row[i]));
};

const rotate = (point, rotation) => {
    return [
        point[0] * rotation[0][0] +
            point[1] * rotation[0][1] +
            point[2] * rotation[0][2],
        point[0] * rotation[1][0] +
            point[1] * rotation[1][1] +
            point[2] * rotation[1][2],
        point[0] * rotation[2][0] +
            point[1] * rotation[2][1] +
            point[2] * rotation[2][2],
    ];
};

export const calculateHelmert3D = (source, target, ids) => {
    const sourceCentroid = computeCentroid(source);
    const targetCentroid = computeCentroid(target);

    const sourceCentered = source.map((p) => subtract(p, sourceCentroid));
    const targetCentered = target.map((p) => subtract(p, targetCentroid));

    const dot = sourceCentered.reduce(
        (acc, p, i) =>
            acc + p.reduce((s, val, j) => s + val * targetCentered[i][j], 0),
        0,
    );

    const normSq = sourceCentered.reduce(
        (acc, p) => acc + p.reduce((s, val) => s + val * val, 0),
        0,
    );

    const scale = dot / normSq;

    const rotation = computeRotationMatrix(sourceCentered, targetCentered);

    const rotatedScaledSourceCentroid = rotate(sourceCentroid, rotation).map(
        (v) => v * scale,
    );
    const translation = targetCentroid.map(
        (v, i) => v - rotatedScaledSourceCentroid[i],
    );

    const transformed = source.map((pt, i) => {
        const rotated = rotate(pt, rotation);
        const scaled = rotated.map((v) => v * scale);
        const transformedPoint = scaled.map((v, j) => v + translation[j]);

        const dx = transformedPoint[0] - target[i][0];
        const dy = transformedPoint[1] - target[i][1];
        const dz = transformedPoint[2] - target[i][2];

        return {
            id: ids[i],
            x: transformedPoint[0].toFixed(4),
            y: transformedPoint[1].toFixed(4),
            z: transformedPoint[2].toFixed(4),
            dx: dx.toFixed(4),
            dy: dy.toFixed(4),
            dz: dz.toFixed(4),
        };
    });

    return { scale, rotation, translation, transformed };
};
