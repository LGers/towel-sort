module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix
        .reduce((acc, cur, idx) => {
            const currArr = (idx % 2) ? cur.reverse() : cur;
            return [...acc, ...currArr];
        }, [])
}
