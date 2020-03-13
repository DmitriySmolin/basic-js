module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        let depth = 0;

        for (let key in arr) {
            if (Array.isArray(arr[key])) {
                count = this.calculateDepth(arr[key])
                if (depth < count) depth = count;
            }

        }
        return depth += 1;
    }
};