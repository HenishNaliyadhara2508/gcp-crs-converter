export function loadPotree(Potree, path) {
    return new Promise((resolve, reject) => {
        Potree.loadPointCloud(
            path,
            '',
            (e) => {
                resolve({ pointCloud: e.pointcloud, res: e });
            },
            (error) => {
                reject(error);
            },
        );
    });
}
